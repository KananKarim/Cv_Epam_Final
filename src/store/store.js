import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../features/skillsSlice";
import educationReducer from "../features/educationSkills";

export const store = configureStore({
    reducer: {
        skills: skillsReducer,
        educations: educationReducer
    }
})