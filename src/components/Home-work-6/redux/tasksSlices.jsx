import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({

        name: "tasks",
        initialState: tasksInitialState,
        reducers: {
                addTask: (state, action) => { state.push(action.payload) },
                deleteTask: (state, action) => { return state.filter(task => task.id !== action.payload); },
                toggleTask: (state, action) => {
                        for (const task of state) {
                                if (task.id === action.payload){return task.completed = !task.completed }
                                break
                        }
                }
        }

})

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export const tasksSliceReducer = tasksSlice.reducer
      
//addTask, deleteTask, toggleTask