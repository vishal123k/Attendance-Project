import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";
import About from "./About";

const Landing = () => {
  const [showTutorial, setShowTutorial] = useState(() => {
    return localStorage.getItem("tutorial") !== "false"; // treat "false" as completed
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []); // empty dependency array to run only once

  const handleTutorialDone = () => {
    setShowTutorial(false);
    localStorage.setItem("tutorial", "false");
  };

  return (
    <div className="landing-main">
      {showTutorial ? (
        <About toggleDone={handleTutorialDone} />
      ) : (
        <>
          <h1>Landing Page</h1>
          <p>Hello and welcome!</p>
          <Link to="/login" className="landing-login-button">
            Login
          </Link>
          <Link to="/register" className="landing-register-button">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default Landing;
