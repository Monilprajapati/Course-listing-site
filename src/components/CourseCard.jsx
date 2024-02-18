import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";

const CourseCard = ({ course }) => {
  return (
    <div
      key={course.id}
      className="flex bg-gray-200 flex-col  justify-between p-4 rounded-md w-full md:w-[350px] lg:w-[430px]"
    >
      <div>
        <img src={course.thumbnail} className="w-full h-64 rounded-sm" alt="" />
        <div className="mt-3 text-lg font-plusSans font-medium">
          {course.name}
        </div>
        <div className="border w-full border-black border-opacity-10 mt-2"></div>
      </div>
      <div className="font-lato flex flex-col justify-between h-full">
        <div className="flex items-center justify-between my-2 pr-2">
          <div className="flex gap-1 items-center">
            <IoLocationSharp />
            <span>{course.location}</span>
          </div>
          <div className="instructor flex gap-2 items-center">
            <img src={course.avatar} alt="" className="w-8 h-8 rounded-full" />
            <span className="mt-2 text-sm">{course.instructor}</span>
          </div>
        </div>
        <Rating name="read-only" value={course.rating} readOnly />
        <p className="opacity-70">{course.description}</p>
        <div className="flex items-center justify-between mt-4 pr-1">
          <span>
            {course.enrollmentStatus === "Open" ? (
              <span className="text-black bg-green-300 border border-green-500 px-3 py-1.5 rounded-full">
                Open
              </span>
            ) : (
              <span className="text-black bg-red-300 border border-red-500 px-3 py-1.5 rounded-full">
                Closed
              </span>
            )}
          </span>
          <Link
            to={
              window.location.pathname === "/mycourses"
                ? `/courses/${course.id}`
                : `${course.id}`
            }
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
