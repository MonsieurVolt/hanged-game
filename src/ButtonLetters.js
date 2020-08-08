import React from "react";
import "./ButtonLetter.css";
import PropTypes from "prop-types";

function ButtonLetters({ letter, onClick, className }) {
  return (
    <button onClick={onClick} className={`letter + ${className}`}>
      {letter}
    </button>
  );
}
ButtonLetters.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  // key: PropTypes.number.isRequired,
};
export default ButtonLetters;
