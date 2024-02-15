import { createSlice } from "@reduxjs/toolkit";

const myCourseSlice = createSlice({
  name: "myCourses",
  initialState: localStorage.getItem("myCourses")
    ? JSON.parse(localStorage.getItem("myCourses"))
    : [],
  reducers: {
    addCourse(state, action) {
      state.push(action.payload);
    },
    removeCourse(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCourse, removeCourse } = myCourseSlice.actions;
export default myCourseSlice.reducer;
