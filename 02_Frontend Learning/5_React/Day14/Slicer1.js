import { createSlice } from "@reduxjs/toolkit";

// createSlice return an object
const reactslicer = createSlice({
    name: "slice1",
    initialState: {count:0},
    reducers: {
        Increment: (state)=> {state.count = state.count+1},
        Decrement: (state) => {state.count = state.count-1},
        Reset: (state) => {state.count=0}
    }
})

// reactslicer.actions : attach the reducer name with their slice name automatically that's why during dispatch we don't need to write
export const {Increment, Decrement, Reset} = reactslicer.actions

export default reactslicer.reducer;

