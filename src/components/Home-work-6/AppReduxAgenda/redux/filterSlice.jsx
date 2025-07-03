import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
        name: "filterCotacts",
        initialState: {filter:''},
        reducers: {
                filteringContacts: (state, action) => {
                        state.filter = action.payload.input; console.log(state.filter)
                }
        }


})

export const { filteringContacts } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer

