import React from 'react';
import "./styles.css";

const Button = ({ text, outlined }) => {
  return (
    <div 
      className={outlined ? "outlined-btn" : 'btn'}
    >
      {text}
    </div>
  )
}

export default Button