import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getPetAndGender: (state, action) => {
            state.array = []
            action.payload.forEach(el => {
                state.array.push(el)
            })
        }
    }
})

export const { getPetAndGender } = searchSlice.actions
export default searchSlice.reducer