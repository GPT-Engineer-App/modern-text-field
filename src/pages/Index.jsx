import React from "react";
import "./Index.css";

const Index = () => {
  const staticText = "This is a static text field.";

  return (
    <div className="container">
      <div className="box">
        <p className="static-text-label">Static Text:</p>
        <p className="static-text">{staticText}</p>
      </div>
    </div>
  );
};

export default Index;
