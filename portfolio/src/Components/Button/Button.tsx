import React from "react";
import "./Button.css";

//List of button styles
const STYLES = [
  "Primary-Style",
  "Secondary-Style",
  "Primary-Outline",
  "Secondary-Outline",
];
const SIZE = ["Small", "Medium", "Large", "Phone"];
const COLOR = ["Primary", "Secondary"];

interface IButton {
  style: string;
  size: string;
  color: string;
  children: any;
  onClick: any;
}

export function Button({ children, style, size, color, onClick }: IButton) {
  //Check if the button style
  let checkButtonStyle: (style: string) => string = (style) => {
    if (STYLES.includes(style)) {
      return style;
    } else {
      return "Primary-Style";
    }
  };
  //Check if the button size

  let checkButtonSize: (string: string) => string = (size) => {
    if (SIZE.includes(size)) {
      return size;
    } else {
      return "Medium";
    }
  };
  //Check if the button color
  let checkButtonColor: (string: string) => string = (color) => {
    if (COLOR.includes(color)) {
      return color;
    } else {
      return "Primary";
    }
  };

  return (
    <button
      className={`btn btn-${checkButtonStyle(style)} btn-${checkButtonSize(
        size
      )} btn-${checkButtonColor(color)}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
