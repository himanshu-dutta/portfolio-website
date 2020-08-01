import React from "react";

const Placeholder = (props) => {
  return (
    <div className="placeholder-wrapper" style={{ minHeight: props.minHeight }}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Placeholder;
