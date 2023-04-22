import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div>
      <div className="container">
        <svg height="200" width="200">
          <circle
            className="ring"
            cx="100"
            cy="102"
            r="70"
            stroke="white"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
