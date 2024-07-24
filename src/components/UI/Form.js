import React from "react";
import Button from "./Button";
import classes from "./Form.module.css";
import classNames from "classnames";

export default function Form({ children, inputDirection, onSubmit }) {
  const formClasses = classNames(
    classes.container,
    inputDirection && classes[inputDirection]
  );

  return (
    <form onSubmit={onSubmit} className={formClasses}>
      {children}
      <Button buttonType="standardButton">Send message</Button>
    </form>
  );
}
