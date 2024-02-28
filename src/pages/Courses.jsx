import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/courseSlice";
import { STATUSES } from "../store/courseSlice";
import { Puff } from "react-loader-spinner";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const dispatch = useDispatch();
  const { status, data: courses } = useSelector((state) => state.courses);
  // const courses = [
  //   {
  //     createdAt: "2024-02-15T10:00:00Z",
  //     name: "Web Development Bootcamp",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1145.jpg",
  //     instructor: "John Doe",
  //     description: "Learn the fundamentals of web development from scratch.",
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     duration: "6 weeks",
  //     schedule: "Monday to Friday, 9:00 AM to 12:00 PM",
  //     location: "Online",
  //     enrollmentStatus: "Open",
  //     rating: 1.5,
  //     prerequisites: ["Basic knowledge of HTML/CSS", "React" , "Javascript"],
  //     syllabus: [
  //       {
  //         week: 1,
  //         topic: "Introduction to React Native",
  //         content:
  //           "Overview of React Native, setting up your development environment.",
  //       },
  //       {
  //         week: 2,
  //         topic: "Building Your First App",
  //         content:
  //           "Creating a simple mobile app using React Native components.",
  //       },
  //     ],
  //     students: ["Alice Smith", "Bob Johnson", "Charlie Brown"],
  //     id: "1",
  //   },
  // ];
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <div className="w-full h-[calc(100vh-70px)] flex items-center justify-center">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#06b6d4"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (status === STATUSES.ERROR) {
    return <div>Error</div>;
  }

  console.log(courses);
  return (
    <div className="w-full h-[calc(100vh-70px)]">
      <h2 className="text-4xl opacity-90 px-5 mt-3 mb-7 font-semibold font-montserrat">Courses</h2>
      <ul className="flex flex-col px-4 md:flex-row md:flex-wrap gap-8 lg:gap-y-10 mt-5 md:justify-center">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
