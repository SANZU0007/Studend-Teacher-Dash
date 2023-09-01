import React from "react";
import { Link } from "react-router-dom";

import "../Style/Base.css"

function Base({ title, description, children }) {
  return (
    <div className="main-container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/add-student">Add Students</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers Data</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className="container">{children}</div>
      </main>
    </div>
  );
}

export default Base;
