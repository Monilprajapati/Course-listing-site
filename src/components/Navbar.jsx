import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-cyan-300 py-3 px-5">
      <Link to="/">eLearning</Link>
      <nav className="flex gap-6 items-center justify-between">
        <Link to="/courses">Courses</Link>
        <Link to="/mycourses">My Courses</Link>
      </nav>
    </div>
  );
};

export default Navbar;
