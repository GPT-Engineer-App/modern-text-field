import React from "react";

const Index = () => {
  const staticText = "This is a static text field.";

  return (
    <div className="container">
      <h1 className="heading">Welcome to the Static Text Field</h1>
      <div className="box">
        <p className="static-text-label">Static Text:</p>
        <div className="static-text-container">
          <p className="static-text">{staticText}</p>
        </div>
      </div>
      <button className="button">Click Me</button>
    </div>
  );
};

export default Index;
