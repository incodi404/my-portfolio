import React from "react";
import Container from "./components/Container";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Landing/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
