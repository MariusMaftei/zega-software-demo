import React from "react";
import classes from "./CheckBox.module.css";

export default function CheckBox({ children }) {
  return (
    <div className={classes.container}>
      <input type="checkbox" name="checkBox" required />
      <label htmlFor="checkBox">{children}</label>
    </div>
  );
}
