import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCourse } from "../store/myCourseSlice";
import CourseCard from "../components/CourseCard";

const MyCourses = () => {
  const dispatch = useDispatch();
  const myCourses = useSelector((state) => state.myCourses);
  console.log(myCourses);
  const handleRemoveEnroll = (courseId, courseName) => {
    dispatch(removeCourse(courseId));
    console.log("remove course", courseName);
    localStorage.setItem(
      "myCourses",
      JSON.stringify(myCourses.filter((course) => course.id !== courseId))
    );
  };

  // useEffect(() => {
  //   const data = localStorage.getItem("myCourses");
  //   if (data) {
  //     dispatch(addCourse(JSON.parse(data)));
  //   }
  // }, []);

  return (
    <div>
      <h1>My Courses</h1>
      <ul>
        {myCourses.length === 0 ? (
          <div>
            <p>You have not enrolled in any courses yet</p>
          </div>
        ) : (
          <div className="flex flex-col px-4 md:flex-row md:flex-wrap gap-8 lg:gap-y-6 mt-5 md:justify-center">
            {myCourses.map((course) => {
              return (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
};

export default MyCourses;
