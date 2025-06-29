import { createSlice } from "@reduxjs/toolkit";
let arr = localStorage.getItem("arrTAsks");console.log(arr)
const tasksInitialState = JSON.parse(arr) || [];

const tasksSlice = createSlice({

        name: "tasks",
        initialState: tasksInitialState,
        reducers: {
                addTask: (state, action) => { state.push(action.payload) },
                deleteTask: (state, action) => { return state.filter(task => task.id !== action.payload); },
                toggleTask: (state, action) => {
                        const task = state.find(task => task.id === action.payload)
                        if(task){ task.completed =!task.completed}
                }
        }

})

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export const tasksSliceReducer = tasksSlice.reducer
      
//addTask, deleteTask, toggleTask