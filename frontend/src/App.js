import React from "react";
import Forms from "./component/Forms";
import ShowScorecard from "./component/Scorecard";
import BallByBallCommentary from "./component/Commentry";

const CricketScoringAdminPanel = () => {
  return (
    <div className="flex bg-[#d5efe3] flex-col h-screen">
      <div className="flex justify-center items-center">
        {/* Forms on top-left */}
        <div className="w-1/3">
          <Forms />        <BallByBallCommentary />

        </div>

        {/* ShowScorecard on the right */}
        <div className="w-1/3 text-right">
          <ShowScorecard />
        </div>
      </div>

      {/* BallByBallCommentary at the bottom (footer) */}

    </div>
  );
};

export default CricketScoringAdminPanel;
