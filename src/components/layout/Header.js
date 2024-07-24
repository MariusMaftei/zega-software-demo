import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "../UI/Button";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
    <div
      className={`${classes.container} ${isScrolled ? classes.scrolled : ""}`}
    >
      <header>
        <nav>
          <Link to="/">
            <ul className={classes.mainMenu}>
              <li>
                <img
                  src="https://www.zegasoftware.com/files/vector/zega-logo.svg"
                  alt="zegasoftware"
                  className={classes.logo}
                />
              </li>
              <li className={classes.softwareItem}>{logoText}</li>
            </ul>
          </Link>
          <ul className={classes.secondaryMenu}>
            <li>
              <Link to="/about">
                <Button
                  buttonType={
                    location.pathname === "/about"
                      ? "blueButton"
                      : "transparentButton"
                  }
                >
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Button
                  buttonType={
                    location.pathname === "/contact"
                      ? "blueButton"
                      : "transparentButton"
                  }
                >
                  Contact
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/hire-developers">
                <Button
                  buttonType={
                    location.pathname === "/hire-developers"
                      ? "blueButton"
                      : "outlineButton"
                  }
                >
                  Hire Developers
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/apply-to-jobs">
                <Button
                  buttonType={
                    location.pathname === "/apply-to-jobs"
                      ? "blueButton"
                      : "standardButton"
                  }
                >
                  Apply for jobs
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
