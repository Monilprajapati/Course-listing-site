import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/myCourseSlice";

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) =>
    state.courses.data.find((course) => course.id === courseId)
  );
  const myCourses = useSelector((state) => state.myCourses);
  const isEnrolled = myCourses.some((c) => c.id === courseId);

  const handleEnroll = () => {
    dispatch(addCourse(course));
    localStorage.setItem("myCourses", JSON.stringify([...myCourses, course]));
  }


  return <div className="flex flex-col gap-5 p-5">
    <div>
    {course.name}
    </div>
    <button className={`p-4 ${isEnrolled ? "bg-cyan-600" : "bg-cyan-400"} border border-black w-fit`}
      onClick={handleEnroll}
      disabled={isEnrolled}      
    >
    {
      isEnrolled ? "You have enrolled" : "Enroll this course"
    }
    </button>
  </div>;
};

export default CourseDetail;
