import { configureStore  } from "@reduxjs/toolkit";
import SavedReducer from "./SavedReducer";
import BookingScreen from "./screens/BookingScreen";
export default configureStore({
    reducer:{
        booking:SavedReducer 
    }
})