import { useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Pages/Deatails/Details";
import CatagariesDetails from "./Pages/CatagariesDetails/CatagarieseDetails";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <div style={{overflow:'hidden'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details/>} />
          <Route path="/CatagariesDetails/:id" element={<CatagariesDetails/>} />
          <Route path="/search/:id" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
