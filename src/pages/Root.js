import React, { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BurgerMenu from "../components/layout/BurgerMenu";

export const RootLayout = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      {isMobileView ? <BurgerMenu /> : <Header />}
      <Outlet />
      <Footer />
    </Fragment>
  );
};
