import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/data/dataSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer,
        search: searchReducer
    }
})