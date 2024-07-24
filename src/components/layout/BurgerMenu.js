import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToPageHandler = (identifier) => {
    navigate(identifier);
  };

  const formatPathname = (pathname) => {
    if (pathname === "/") return "Software";
    if (pathname.startsWith("/job/")) return "Job Description";

    const formattedPathname = pathname.slice(1).replace(/-/g, " ");
    return (
      formattedPathname.charAt(0).toUpperCase() + formattedPathname.slice(1)
    );
  };

  const logoText = formatPathname(location.pathname);

  return (
    <header
      className={`${classes.header} ${menuOpen ? classes.activeMenu : ""}`}
    >
      <div className={classes.navigationLinks}>
        <ul className={`${classes.list} ${menuOpen ? classes.activeList : ""}`}>
          <li>
            <Button
              buttonType="transparentButton"
              burgerMenuStyles="burgerMenuStyles"
              className={classes.burgerMenuButton}
              onClick={() => navigateToPageHandler("about")}
            >
              About
            </Button>
          </li>
          <li>
            <Button
              buttonType="transparentButton"
              burgerMenuStyles="burgerMenuStyles"
              className={classes.burgerMenuButton}
              onClick={() => navigateToPageHandler("contact")}
            >
              Contact
            </Button>
          </li>
          <li>
            <Button
              buttonType="outlineButton"
              burgerMenuStyles="burgerMenuStyles"
              className={classes.burgerMenuButton}
              onClick={() => navigateToPageHandler("hire-developers")}
            >
              Hire Developers
            </Button>
          </li>
          <li>
            <Button
              buttonType="standardButton"
              burgerMenuStyles="burgerMenuStyles"
              className={classes.burgerMenuButton}
              onClick={() => navigateToPageHandler("apply-to-jobs")}
            >
              Apply to Jobs
            </Button>
          </li>
        </ul>
      </div>
      <Link to="/">
        <div className={classes.headerLogo}>
          <img
            src="https://www.zegasoftware.com/files/vector/zega-logo.svg"
            alt="zegasoftware"
          />
          <p className={classes.softwareItem}>{logoText}</p>
        </div>
      </Link>
      <div
        className={`${classes.hamburgerWrapper} ${
          menuOpen ? classes.active : ""
        }`}
        onClick={toggleMenu}
      >
        <div className={classes.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
