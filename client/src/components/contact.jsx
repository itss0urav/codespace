import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      message,
    };

    // Make an HTTP POST request to the backend API
    axios
      .post("http://localhost:5000/api/feedback", formData)
      .then((res) => {
        console.log(res.data);
        setName("");
        setEmail("");
        setMessage("");
        setSuccessMessage("Data submitted successfully!");
        setErrorMessage("");
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage("");
        setErrorMessage("Error: Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {successMessage && (
          <div className="text-gray-700 mb-4">{successMessage}</div>
        )}
        {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded resize-y"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
