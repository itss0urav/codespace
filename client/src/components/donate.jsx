import React from "react";

const customQrCode =
  "https://media.discordapp.net/attachments/979241917852303370/1126861601245515867/1688735128158.jpg?width=671&height=671";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-900 to-blue-900">
      <h1 className="text-4xl font-bold text-white mb-6">Donate for a Cause</h1>
      <div className="max-w-md px-6 py-4 bg-white rounded-lg shadow-lg">
        <p className="text-lg text-gray-800 mb-4">
          Your generous donation can make a real difference. Scan the QR code
          below to donate:
        </p>
        <div className="flex justify-center mb-6">
          <img
            src={customQrCode}
            alt="Custom QR Code"
            className="w-64 h-64 rounded-lg shadow-xl"
          />
        </div>
        <p className="text-sm text-gray-500">Thank you for your support!</p>
      </div>
    </div>
  );
};

export default App;
