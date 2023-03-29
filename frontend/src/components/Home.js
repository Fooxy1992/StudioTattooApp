// frontend/src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        <Link to="/schedule">Schedule your session</Link>
      </p>
    </div>
  );
}

export default Home;
