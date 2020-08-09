import React from "react";
import "./WordToFind.css";
function WordToFind({ letter }) {
  return <span className="letterOfFinalWord">{letter}</span>;
}
export default WordToFind;
