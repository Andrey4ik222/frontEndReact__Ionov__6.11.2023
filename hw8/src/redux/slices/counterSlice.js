import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByValue: (state, {payload}) => {
            state.count += payload
        },
        reset: (state) => {
            state.count = initialState.count
        },
    }
})

export default counterSlice.reducer
export const {increment, decrement, incrementByValue, reset} = counterSlice.actions