import React from "react";
import classes from "./PageSection.module.css";
import classNames from "classnames";

export default function PageSection({
  children,
  backgroundColor,
  headingBottomBorder,
  headingColor,
  headingText,
  width,
  margin,
  flexDirection,
  justifyContent,
  alignItems,
}) {
  const sectionClasses = classNames(
    classes.pageSection,
    backgroundColor && classes[backgroundColor]
  );

  const headingContainerClasses = classNames(
    classes.backgroundHeadingContainer,
    headingBottomBorder && classes[headingBottomBorder]
  );

  const headingClasses = classNames(
    classes.backgroundHeading,
    headingColor && classes[headingColor]
  );

  const wrapperClasses = classNames(
    classes.wrapper,
    width && classes[width],
    margin && classes[margin],
    flexDirection && classes[flexDirection],
    justifyContent && classes[justifyContent],
    alignItems && classes[alignItems]
  );

  return (
    <section className={sectionClasses}>
      <div className={wrapperClasses}>{children}</div>
      {headingText && (
        <div className={headingContainerClasses}>
          <h1 className={headingClasses}>{headingText}</h1>
        </div>
      )}
    </section>
  );
}
