import React from "react";
import classes from "./JobSectionButton.module.css";

export default function JobSectionButton({
  children,
  hoverButton,
  onClick,
  isFiltered,
}) {
  return (
    <div
      className={`${classes.techButton}  ${
        isFiltered ? classes.filtered : ""
      } ${classes[hoverButton]}`}
    >
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
