import { createSlice, } from "@reduxjs/toolkit"

const typesOfTasks = {
        all: "all",
        completed: "completed",
        active:"active"
}

const initialFilter = { status: typesOfTasks.all }
const filterSlice = createSlice({
        name: "filters",
        initialState: initialFilter,
        reducers: {
                filteringTask: (state, action) => {state.status = action.payload}
        }
})

export const { filteringTask } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer
