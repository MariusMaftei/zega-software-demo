import React from "react";
import classNames from "classnames";
import classes from "./Button.module.css";

function Button({ children, buttonType, burgerMenuStyles, onClick }) {
  const buttonClasses = classNames(
    classes.button,
    buttonType && classes[buttonType],
    burgerMenuStyles && classes[burgerMenuStyles]
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export default Button;
