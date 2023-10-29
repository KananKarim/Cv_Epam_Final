import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    educations: [],
    loading: false,
    error: false
}

export const getEducations = createAsyncThunk('api/educations', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/educations')
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
})

export const educationsSkills = createSlice({
    name: "educations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEducations.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getEducations.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.educations = action.payload
            })
            .addCase(getEducations.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            });
    },
})

export default educationsSkills.reducer;