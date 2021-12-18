import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Spotlight from "./pages/Spotlight";
import Profile from "./pages/Profile";
import Peditor from "./pages/Peditor";
import SearchData from "./pages/SearchData";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Spotlight" element={<Spotlight />} />
        <Route exact path="/editor" element={<Peditor />} />
        <Route exact path="/australia" element={<Profile />} />
        <Route exact path="/searchresult" element={<SearchData />} />

        <Route exact path="*" element={<h1> Error Page not found </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
