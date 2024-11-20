import React, { useState, useEffect } from "react";
import PlayerScorecard from "./Player";
import axios from "axios";

const ShowScorecard = () => {
  const [scorecard, setScorecard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScorecard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/scoring/match/match123"
        );
        setScorecard(response.data.match);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch match stats");
        setLoading(false);
      }
    };

    fetchScorecard();
  }, []);

  if (loading) {
    return <p>Loading scorecard...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!scorecard) {
    return <p>No scorecard data available!</p>;
  }

  const overs = Math.floor(scorecard.teamStats.legalBalls / 6);
  const ballsInCurrentOver = scorecard.teamStats.legalBalls % 6;

  return (
    <>
      <div className="max-w-lg mx-auto text-left  bg-[#c4e5c3] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-indigo-600 text-left mb-4">
          Scorecard
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg  font-semibold">Team Name:</h3>
            <p className="text-gray-700">{scorecard.teamName}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Runs:</h3>
            <p className="text-gray-700">{scorecard.teamStats.totalRuns}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Wickets:</h3>
            <p className="text-gray-700">{scorecard.teamStats.totalWickets}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Overs:</h3>
            <p className="text-gray-700">
              {overs}.{ballsInCurrentOver}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Wides:</h3>
            <p className="text-gray-700">{scorecard.teamStats.extras.wides}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">No Balls:</h3>
            <p className="text-gray-700">
              {scorecard.teamStats.extras.noBalls}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Leg Byes:</h3>
            <p className="text-gray-700">
              {scorecard.teamStats.extras.legByes}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Byes:</h3>
            <p className="text-gray-700">{scorecard.teamStats.extras.byes}</p>
          </div>
        </div>
      </div>

      {/* Pass batsman and bowler stats to PlayerScorecard component */}
      <PlayerScorecard
        batsmanStats={scorecard.batsmanStats}
        bowlerStats={scorecard.bowlerStats}
      />
    </>
  );
};

export default ShowScorecard;
