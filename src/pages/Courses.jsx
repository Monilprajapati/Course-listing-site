import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/courseSlice";
import { STATUSES } from "../store/courseSlice";
import { Link } from "react-router-dom";

const Courses = () => {
  const dispatch = useDispatch();
  const { status, data: courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);


  if (status === STATUSES.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === STATUSES.ERROR) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>Courses</h2>
      <ul className="flex flex-col gap-3 mt-5">
        {courses.map((course) => (
          <Link key={course.id} to={`${course.id}`}>
            {course.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
