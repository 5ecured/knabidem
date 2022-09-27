import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetch: (state, action) => {
            state.array = []
            action.payload.forEach(obj => {
                state.array.push(obj)
            })
        }
    }
})

export const { fetch } = dataSlice.actions
export default dataSlice.reducer