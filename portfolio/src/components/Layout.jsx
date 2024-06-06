import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Container from "./Container";

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
