import React, { useState, useEffect } from "react";
import Forms from "./component/Forms";
import ShowScorecard from "./component/Scorecard";
import BallByBallCommentary from "./component/Commentry";
import PlayerScorecard from "./component/Player";
import axios from "axios";

const CricketScoringAdminPanel = () => {
  const [scorecard, setScorecard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMainSectionOpen, setIsMainSectionOpen] = useState(true);
  const [isCommentaryOpen, setIsCommentaryOpen] = useState(true);
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
  const toggleMainSection = () => setIsMainSectionOpen(!isMainSectionOpen);
  const toggleCommentarySection = () => setIsCommentaryOpen(!isCommentaryOpen);
  return (
    <div className="flex flex-col h-screen scrollbar-hidden">
      <button onClick={toggleMainSection} className="w-full text-left p-2 mb-4">
        {isMainSectionOpen ? "Hide Main Section" : "Show Main Section"}
      </button>
      {isMainSectionOpen && (
        <div className="flex flex-row h-[80%]">
          <div className="w-[44%] h-[88%] p-4 ml-20">
            <Forms />
          </div>
          <div className="w-[44%] h-[88%] p-4">
            <div className="flex flex-col h-full">
              <div className="h-[44%] mb-16">
                <ShowScorecard />
              </div>
              <div className="h-[44%]">
                <PlayerScorecard
                  batsmanStats={scorecard.batsmanStats}
                  bowlerStats={scorecard.bowlerStats}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Bottom Section: BallByBallCommentary */}
      <div className="h-[20%] w-full p-4">
        <button
          onClick={toggleCommentarySection}
          className="w-full text-left p-2 mb-4"
        >
          {isCommentaryOpen ? "Hide Commentary" : "Show Commentary"}
        </button>
        {isCommentaryOpen && (
          <BallByBallCommentary deliveries={scorecard.deliveries} />
        )}
      </div>
    </div>
  );
};

export default CricketScoringAdminPanel;
