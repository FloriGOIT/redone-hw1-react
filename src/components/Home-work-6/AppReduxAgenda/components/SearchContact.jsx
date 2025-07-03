import { useSelector } from "react-redux";

const SearcContacts = () => {
        const contacts = useSelector(state => state.agendaRedux);
        console.log("Search contacts", contacts)
}
export default SearcContacts