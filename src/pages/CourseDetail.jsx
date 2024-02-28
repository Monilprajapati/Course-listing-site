import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { STATUSES } from "../store/courseSlice";
import { addCourse } from "../store/myCourseSlice";
import { Puff } from "react-loader-spinner";
import { IoLocationSharp } from "react-icons/io5";
import { Rating } from "@mui/material";
import { FaCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses.data).find(
    (c) => c.id === courseId
  );
  if (!course) {
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
  const myCourses = useSelector((state) => state.myCourses);
  const isEnrolled = myCourses.some((c) => c.id === courseId);


  const handleEnroll = () => {
    dispatch(addCourse(course));
    localStorage.setItem("myCourses", JSON.stringify([...myCourses, course]));
  };

  console.log(courseId);
  console.log(course);
  return (
    <>
      <div className="px-4 py-4 flex flex-col gap-3 font-plusSans">
        <h1 className="text-3xl font-semibold mb-3 mt-2 font-montserrat">
          {course.name}
        </h1>
        <img src={course.thumbnail} alt="" className="rounded-md" />
        <div className="flex items-center justify-between my-2 mb-0 pr-2">
          <div className="flex gap-1 text-xl items-center">
            <IoLocationSharp />
            <span>{course.location}</span>
          </div>
          <div className="instructor text-lg flex gap-2 items-center">
            <img src={course.avatar} alt="" className="w-8 h-8 rounded-full" />
            <span className="mt-2">{course.instructor}</span>
          </div>
        </div>
        <div className="border w-full border-black border-opacity-10"></div>
        <p className="description px-1 text-lg">{course.description}</p>
        <div className="ratingSection flex justify-between">
          <Rating name="read-only" value={course.rating} readOnly />
          <span className="pr-2">
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
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <span className="text-lg">Pre-requisites:</span>
          <div className="preReq flex gap-3 items-center flex-wrap">
            {course.prerequisites.map((req, index) => {
              return (
                <span className="px-3 py-2 bg-gray-200 rounded-md" key={index}>
                  {req}
                </span>
              );
            })}
          </div>
        </div>
        <div className="durationSchedule pl-2 flex flex-col gap-2 mt-1">
          <div className="duration flex gap-2 items-center">
            <span className="flex gap-2 text-lg items-center">
              <FaClock />
              <span className="font-medium">Duration :</span>
            </span>
            <span className="text-lg">{course.duration}</span>
          </div>
          <div className="schedule flex flex-col">
            <span className="flex gap-2 text-lg items-center">
              <FaCalendarDays />
              <span className="mt-1 font-medium">Schedule : </span>
            </span>
            <p className="text-md mt-1">{course.schedule}</p>
          </div>
          <div className="syllabus mt-2">
            {course.syllabus.map((syl, i) => {
              return (
                <Accordion
                  sx={{
                    border: "1px solid rgba(0, 0, 0, .125)",
                  }}
                  key={i}
                >
                  <AccordionSummary expandIcon={<IoIosArrowDown />}>
                    <span className="">
                      <span>Week {syl.week} : </span>
                      <span>{syl.topic}</span>
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      borderTop: "1px solid rgba(0, 0, 0, .125)",
                      marginTop: "-2px",
                    }}
                  >
                    <p className="">{syl.content}</p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
        <button
          className="p-4 mb-4 bg-cyan-500 border border-black mx-auto rounded-md text-white font-semibold font-montserrat w-2/3 mt-4 hover:bg-cyan-600 transition-all duration-300 ease-in-out"
          onClick={() => handleEnroll()}
        >
          {isEnrolled ? "Enrolled" : "Enroll"}
        </button>
      </div>
    </>
  );
};

export default CourseDetail;
