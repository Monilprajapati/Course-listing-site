import { configureStore } from '@reduxjs/toolkit';
import myCourseReducer from './myCourseSlice';;
import courseReducer from './courseSlice';

// Here we are combining the reducers
const store = configureStore({
    reducer: {
        myCourses: myCourseReducer,
        courses: courseReducer,
    },
});

export default store;