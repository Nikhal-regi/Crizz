import React from "react";
import Forms from "./component/Forms";
import ShowScorecard from "./component/Scorecard";
import BallByBallCommentary from "./component/Commentry";

const CricketScoringAdminPanel = () => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-semibold text-indigo-600">
        Cricket Scoring Admin Panel
      </h2>
      <div className="">
        <Forms />
        <ShowScorecard />
      </div>
      <BallByBallCommentary />
    </div>
  );
};

export default CricketScoringAdminPanel;
