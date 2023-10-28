import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../features/skillsSlice";

export const store = configureStore({
    reducer: {
        skills: skillsReducer
    }
})