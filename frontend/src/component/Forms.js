import React, { useState } from "react";

const CommentaryButton = () => {
  const [currentStriker, setCurrentStriker] = useState("");
  const [nonStriker, setNonStriker] = useState("");
  const [deliveryType, setDeliveryType] = useState(null);
  const [runScored, setRunScored] = useState(null);

  return (
    <div className="max-w-md mx-auto bg-[#c4e5c3] shadow-lg rounded-lg p-6">
      {/* Batsmen Information */}
      <div className="mb-6">
        <div className="mb-4">
          <label
            htmlFor="striker"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Current Striker
          </label>
          <input
            type="text"
            id="striker"
            value={currentStriker}
            onChange={(e) => setCurrentStriker(e.target.value)}
            placeholder="Enter Striker's Name"
            className="w-full p-3 border border-gray-300 bg-[#efefef] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="nonStriker"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Non-Striker
          </label>
          <input
            type="text"
            id="nonStriker"
            value={nonStriker}
            onChange={(e) => setNonStriker(e.target.value)}
            placeholder="Enter Non-Striker's Name"
            className="w-full p-3 border border-gray-300 bg-[#efefef] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Run Buttons */}
      <div className="grid grid-cols-6 gap-2 mb-6">
        {[0, 1, 2, 3, 4, 6].map((run) => (
          <button
            key={run}
            onClick={() => {
              setRunScored(run);
              setDeliveryType("normal");
            }}
            className={`py-2 text-lg font-semibold rounded-lg border transition-colors duration-200 ${runScored === run && deliveryType === "normal"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-indigo-300"
              }`}
          >
            {run}
          </button>
        ))}
      </div>

      {/* Extra Delivery Buttons */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {["Wicket", "Wide", "No Ball", "Leg Bye", "Bye"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setDeliveryType(type.toLowerCase());
              setRunScored(null);
            }}
            className={`py-2 text-sm font-semibold rounded-lg border transition-colors duration-200 ${deliveryType === type.toLowerCase()
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-indigo-300"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* New Ball Button */}
      <div>
        <button
          onClick={() => {
            // Logic for handling submission can be added here
            console.log({
              striker: currentStriker,
              nonStriker,
              deliveryType,
              runScored,
            });
            setDeliveryType(null);
            setRunScored(null);
          }}
          disabled={!currentStriker || !nonStriker || !deliveryType}
          className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          New Ball
        </button>
      </div>
    </div>
  );
};

export default CommentaryButton;
