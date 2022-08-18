import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";
import modalReducer from "./modal/modalSlice";
import modalContentReducer from "./modal/modalContentSlice";

export const store = configureStore ({
    reducer: {
        data: dataReducer,
        modal: modalReducer,
        modalContent: modalContentReducer
    }
});