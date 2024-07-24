import React from "react";
import Wrapper from "../UI/Wrapper";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Wrapper>
        <ul className={classes.copyright}>
          <li>© 2007 - 2024 ZegaSoftware. All rights reserved.</li>
        </ul>
        <ul className={classes.policy}>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Security Policy</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </Wrapper>
    </footer>
  );
}
