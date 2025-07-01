import style from "./apReduxAgenda.module.scss";
import { useSelector } from "react-redux";

const ListTheContacs = () => { 
     const contacts = useSelector(state=>state.agendaRedux)
        return (
                <div className={style.listTheContacts}>
                        <ul>
                                {contacts.map(contact => <li key={contact.id}>
                                        <span>{contact.name}  || {contact.number}</span>   
                                </li>) }
                        </ul>
                </div>
        )
}

export default ListTheContacs
