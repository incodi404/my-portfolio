import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}

export default Layout;
