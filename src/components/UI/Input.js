import React, { useState } from "react";
import classes from "./Input.module.css";

export default function Input({
  input,
  textarea,
  labelLineText,
  name,
  value,
  setEnteredValues,
}) {
  const [didEdit, setDidEdit] = useState(false);

  const customClass = textarea ? classes.textAreaContainer : classes.container;

  const inputChangeHandler = (event) => {
    const newValue = event.target.value;
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
    setDidEdit(true);
  };

  const inputBlurHandler = () => {
    if (value.trim() === "") {
      setDidEdit(true);
    } else {
      setDidEdit(false);
    }
  };

  return (
    <div className={customClass}>
      <div className={classes.entryArea}>
        {input && !textarea && (
          <input
            required
            type="text"
            name={name}
            value={value}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        )}
        {textarea && !input && (
          <textarea
            required
            name={name}
            value={value}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        )}
        <div className={classes.labelLine}>
          {didEdit && value.trim() === "" && (
            <span className={classes.errorInputText}>
              {`The ${labelLineText} field is Required`}
            </span>
          )}
          {!didEdit && labelLineText}
        </div>
      </div>
    </div>
  );
}
