import { createSlice } from "@reduxjs/toolkit"
localStorage.setItem("reduxContacts", JSON.stringify([]))
const contactsLocal = localStorage.getItem("reduxContacts")

const contactsSlice = createSlice({
        name: "contacts",
        initialState: JSON.parse(contactsLocal),
        reducers: {
                addNewContact: (state, action) => { state.push(action.payload);  localStorage.setItem("reduxContacts",JSON.stringify(state))}
        }
})

export const { addNewContact } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;





