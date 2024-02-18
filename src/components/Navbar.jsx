import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-cyan-200 font-plusSans">
      <Link
        to="/"
        className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        eLearning
      </Link>
      <div className="flex gap-6 items-center justify-between md:text-md lg:text-xl">
        <Link to="/courses">Courses</Link>
        <Link to="/mycourses">My Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
