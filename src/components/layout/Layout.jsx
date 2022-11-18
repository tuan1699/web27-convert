import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import React from "react";

const Layout = () => {
  return (
    <>
      <Header />

      <main style={{ margin: "88px 0 0 0" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
