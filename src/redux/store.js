import { configureStore } from "@reduxjs/toolkit"
import slice from "./quiz"

const store = configureStore({
    reducer:{
        quiz : slice.reducer
    }
})
 export default store