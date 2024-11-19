import React from "react";
import PlayerScorecard from "./Player";

const ShowScorecard = () => {
  // Static data for demonstration
  const scorecard = {
    teamName: "Team A",
    totalRuns: 150,
    totalWickets: 5,
    legalBalls: 96, // Example: 16 overs
    extras: {
      wides: 2,
      noBalls: 1,
      byes: 4,
      legByes: 3,
    },
  };

  // Calculate overs
  const overs = Math.floor(scorecard.legalBalls / 6);
  const ballsInCurrentOver = scorecard.legalBalls % 6;

  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-4">
          Scorecard
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold">Team Name:</h3>
            <p className="text-gray-700">{scorecard.teamName}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Runs:</h3>
            <p className="text-gray-700">{scorecard.totalRuns}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Wickets:</h3>
            <p className="text-gray-700">{scorecard.totalWickets}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Overs:</h3>
            <p className="text-gray-700">
              {overs}.{ballsInCurrentOver}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Wides:</h3>
            <p className="text-gray-700">{scorecard.extras.wides}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">No Balls:</h3>
            <p className="text-gray-700">{scorecard.extras.noBalls}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Leg Byes:</h3>
            <p className="text-gray-700">{scorecard.extras.legByes}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Byes:</h3>
            <p className="text-gray-700">{scorecard.extras.byes}</p>
          </div>
        </div>
      </div>
      <PlayerScorecard />
    </>
  );
};

export default ShowScorecard;
