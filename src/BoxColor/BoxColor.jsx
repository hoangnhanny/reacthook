import React, { useState } from "react";
import "./BoxColor.scss";

BoxColor.propTypes = {};

function getColor() {
  const listColor = ["pink", "red", "blue", "green", "black"];
  const getIndex = Math.floor(Math.random() * 5);
  return listColor[getIndex];
}

function BoxColor() {
  const [color, setColor] = useState("green");
  function handleColor() {
    const setColorBox = getColor();
    setColor(setColorBox);
  }
  return (
    <div
      className="box-color"
      style={{ backgroundColor: color }}
      onClick={handleColor}
    >
      Box
    </div>
  );
}

export default BoxColor;
