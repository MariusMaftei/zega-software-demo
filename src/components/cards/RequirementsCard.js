import React from "react";
import classes from "./RequirementsCard.module.css";
import H2 from "../UI/H2";
import P from "../UI/P";

export default function RequirementsCard({
  title,
  smallTitle,
  subtitle,
  description,
  titleColor,
  subtitleFontWeight,
  bluesSubtitle,
}) {
  return (
    <div className={classes.container}>
      {title && <H2 textColor={titleColor}>{title}</H2>}
      {smallTitle && <P fontWeight700="fontWeight700">{smallTitle}</P>}
      <P fontWeight700={subtitleFontWeight} blueParagraph={bluesSubtitle}>
        {subtitle}
      </P>
      <P>{description}</P>
    </div>
  );
}
