import React from "react";

const PlayerScorecard = () => {
  const batsmanDetails = [
    { name: "Batsman 1", runs: 45, balls: 32 },
    { name: "Batsman 2", runs: 30, balls: 25 },
  ];

  const bowlerDetails = [
    { name: "Bowler 1", runsConceded: 35, overs: 4, maidens: 0, wickets: 2 },
    { name: "Bowler 2", runsConceded: 28, overs: 4, maidens: 1, wickets: 1 },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
        Player Scorecard
      </h2>

      {/* Batsman Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Batsman Details
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center font-semibold">
          <span>Name</span>
          <span>Runs</span>
          <span>Balls</span>
        </div>
        {batsmanDetails.map((batsman, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 text-center text-gray-700 py-2 border-b"
          >
            <span>{batsman.name}</span>
            <span>{batsman.runs}</span>
            <span>{batsman.balls}</span>
          </div>
        ))}
      </div>

      {/* Bowler Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Bowler Details
        </h3>
        <div className="grid grid-cols-5 gap-4 text-center font-semibold">
          <span>Name</span>
          <span>Runs</span>
          <span>Overs</span>
          <span>Maidens</span>
          <span>Wickets</span>
        </div>
        {bowlerDetails.map((bowler, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 text-center text-gray-700 py-2 border-b"
          >
            <span>{bowler.name}</span>
            <span>{bowler.runsConceded}</span>
            <span>{bowler.overs}</span>
            <span>{bowler.maidens}</span>
            <span>{bowler.wickets}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerScorecard;
