import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchCourses.rejected, (state) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export default courseSlice.reducer;


export const fetchCourses = createAsyncThunk('courses/fetch', async () => {
    const res = await fetch('https://65ccdf89dd519126b83fbc56.mockapi.io/api/v1/courses/all/');
    const data = await res.json();
    return data;
});
