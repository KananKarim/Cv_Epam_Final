import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [],
    loading: false
}

export const getSkills = createAsyncThunk('api/skills', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/skills')
        const data = await response.json();
        return data.skills;
    } catch (error) {
        console.log(error);
    }
})

export const postSkill = createAsyncThunk('api/postSkill', async (newSkill) => {
    try {
        const response = await fetch('http://localhost:3000/api/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSkill)
        });
        const data = await response.json();
        return data.skills;
    } catch (error) {
        console.log(error);
    }
});

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSkills.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSkills.fulfilled, (state, action) => {
                state.loading = false;
                state.skills = action.payload;
            })
            .addCase(postSkill.fulfilled, (state, action) => {
                const existingSkills = JSON.parse(localStorage.getItem("skills")) || [];
                const updatedSkills = [...existingSkills, action.payload];
                state.skills = updatedSkills;
                localStorage.setItem("skills", JSON.stringify(updatedSkills));
            });
    },
});

export default skillsSlice.reducer;
export const { addSkill } = skillsSlice.actions;
