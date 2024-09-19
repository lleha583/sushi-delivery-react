import { configureStore } from "@reduxjs/toolkit";
import userReduser  from "./userSlice";
import basketSlice from "./basketSlice";

export const store = configureStore({
    reducer: {
        user: userReduser,
        basket: basketSlice
    }
})