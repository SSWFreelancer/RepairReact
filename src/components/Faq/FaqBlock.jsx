import React, { useState, useRef } from "react";
export default ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`questions__block ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    >
      <div className="questions__name">
        <img src="images/arrowtop.png" alt="" />
        {question}
      </div>
      <div
        className="questions__text"
        ref={contentRef}
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        {answer}
      </div>
    </div>
  );
};
