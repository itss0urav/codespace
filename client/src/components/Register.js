import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, password });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Register</h2>
      <form className="mb-4" onSubmit={handleRegister}>
        <input
          className="border border-gray-400 rounded py-2 px-4 mb-2 w-64 sm:w-auto"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-gray-400 rounded py-2 px-4 mb-2 w-64 sm:w-auto"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
