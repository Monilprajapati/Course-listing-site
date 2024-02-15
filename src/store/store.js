import { configureStore } from '@reduxjs/toolkit';
import myCourseReducer from './myCourseSlice';;
import courseReducer from './courseSlice';
const store = configureStore({
    reducer: {
        myCourses: myCourseReducer,
        courses: courseReducer,
    },
});

export default store;