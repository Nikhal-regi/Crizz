import React from "react";
import { FaEdit } from "react-icons/fa";

const BallByBallCommentary = () => {
  const deliveries = [
    {
      ball: 1,
      outcome: "4 runs (boundary by Batsman 1)",
      bowler: "Bowler 1",
      batsman: "Batsman 1",
    },
    {
      ball: 2,
      outcome: "Dot ball",
      bowler: "Bowler 1",
      batsman: "Batsman 2",
    },
    {
      ball: 3,
      outcome: "1 run",
      bowler: "Bowler 1",
      batsman: "Batsman 2",
    },
  ];

  return (
    <div className="w-[88%] mt-10 mx-auto bg-[#c4e5c3] shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
        Ball by Ball Commentary
      </h2>

      {deliveries.map((delivery, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b py-2"
        >
          <div>
            <p className="text-gray-800">
              <strong>Ball {delivery.ball}:</strong> {delivery.outcome}
            </p>
            <p className="text-sm text-gray-500">
              Bowler: {delivery.bowler}, Batsman: {delivery.batsman}
            </p>
          </div>
          <button className="text-indigo-600 hover:text-indigo-800">
            <FaEdit size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BallByBallCommentary;
