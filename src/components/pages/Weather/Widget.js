import React from "react";
import Weather from "./Weather";

const Widget = () => {
  return (
    <div className="widMain">
      <div className="widCity">Dallas </div>

      <span
        className="widIcon"
        class="glyphicon glyphicon-cloud"
        aria-hidden="true"
      />
      <div className="widTemp">
        <Weather />
      </div>
    </div>
  );
};

export default Widget;
