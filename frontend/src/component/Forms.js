import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const CommentaryButton = () => {
  const [currentStriker, setCurrentStriker] = useState("");
  const [nonStriker, setNonStriker] = useState("");
  const [deliveryType, setDeliveryType] = useState(null);
  const [runScored, setRunScored] = useState(null);

  const handleNewBall = async () => {
    try {
      const matchId = uuidv4();
      // Prepare data for POST request
      const deliveryData = {
        matchId: matchId, // Provide the match ID here
        type: deliveryType,
        runs: runScored || 0,
        extras: {}, // Optional, if you have any extras data
        bowler: "bowlerName", // Provide the bowler's name here
        batsman: currentStriker, // Current Striker
      };

      // Send POST request to server
      const response = await axios.post(
        "http://localhost:5000/api/scoring/delivery",
        deliveryData
      );

      // Handle response (e.g., log or update UI)
      if (response.data.success) {
        console.log("Delivery added successfully", response.data.match);
        // Optionally, reset states after successful request
        setCurrentStriker("");
        setNonStriker("");
        setDeliveryType(null);
        setRunScored(null);
      } else {
        console.error("Failed to add delivery");
      }
    } catch (err) {
      console.error("Error occurred while adding delivery:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-[#c4e5c3] shadow-xl rounded-lg p-8 max-h-[60rem]">
      <div className="mb-8">
        {/* Striker Input */}
        <div className="mb-6">
          <label
            htmlFor="striker"
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Current Striker
          </label>
          <input
            type="text"
            id="striker"
            value={currentStriker}
            onChange={(e) => setCurrentStriker(e.target.value)}
            placeholder="Enter Striker's Name"
            className="w-full p-4 text-lg border border-gray-300 bg-[#f0f0f0] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {/* Non-Striker Input */}
        <div>
          <label
            htmlFor="nonStriker"
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Non-Striker
          </label>
          <input
            type="text"
            id="nonStriker"
            value={nonStriker}
            onChange={(e) => setNonStriker(e.target.value)}
            placeholder="Enter Non-Striker's Name"
            className="w-full p-4 text-lg border border-gray-300 bg-[#f0f0f0] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Run Buttons */}
      <div className="grid grid-cols-6 gap-3 mb-8">
        {[0, 1, 2, 3, 4, 6].map((run) => (
          <button
            key={run}
            onClick={() => {
              setRunScored(run);
              setDeliveryType("normal");
            }}
            className={`py-3 text-lg font-semibold rounded-lg border transition-colors duration-200 ${
              runScored === run && deliveryType === "normal"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-400"
            }`}
          >
            {run}
          </button>
        ))}
      </div>

      {/* Extra Delivery Buttons */}
      <div className="grid grid-cols-5 gap-3 mb-8">
        {["Wicket", "Wide", "No Ball", "Leg Bye", "Bye"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setDeliveryType(type.toLowerCase());
              setRunScored(null);
            }}
            className={`py-3 text-md font-semibold rounded-lg border transition-colors duration-200 ${
              deliveryType === type.toLowerCase()
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-400"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* New Ball Button */}
      <div>
        <button
          onClick={handleNewBall}
          disabled={!currentStriker || !nonStriker || !deliveryType}
          className="w-full py-4 text-xl font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          New Ball
        </button>
      </div>
    </div>
  );
};

export default CommentaryButton;
