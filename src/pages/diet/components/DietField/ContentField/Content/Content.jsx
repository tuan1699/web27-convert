import React from "react";
import DietContent from "./DietContent/DietContent";

const Content = () => {
  return (
    <div className="content">
      <div className="row">
        <DietContent />
        Sidebar
      </div>
    </div>
  );
};

export default Content;
