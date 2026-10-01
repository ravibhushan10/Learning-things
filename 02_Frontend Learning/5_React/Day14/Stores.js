import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"

const stores = configureStore({
    reducer:{
      slice1: slice1Reducer,
      //add multiple slice here 
      // slice2: slice2Reducer,
      // slice3: slice3Reducer,

    }
})

export default stores;

// slice name: Reducer
// Store only take slice name for the matching this slice is already created or not  and it also take reducer to match