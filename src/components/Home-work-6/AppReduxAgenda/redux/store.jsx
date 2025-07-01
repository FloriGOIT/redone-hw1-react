import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";

const storeAgenda = configureStore({
        reducer:{agendaRedux :contactsSliceReducer}
})

export default storeAgenda