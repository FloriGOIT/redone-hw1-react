import { useState } from 'react';
import style from './apReduxAgenda.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../redux/contactsSlice';

const ListTheContacs = () => {
  const [isEdit, setIsEdit] = useState(false);

 
  const contacts = useSelector(state => state.agendaRedux);
  const dispatch = useDispatch();
        const handleUpdateContact = (event,contactId) => {
                event.preventDefault();
          const form = event.currentTarget.elements;
                const newName=form.newName.value.trim();
                const newPhone = form.newPhone.value.trim();
                console.log(newName,newPhone)
                 dispatch(editContact({ id: contactId, number: newPhone, name: newName }));
                setIsEdit(false)   
  };
  return (
    <div className={style.listTheContacts}>
      <ul>
        {contacts.map((contact, index) => (
                <li key={contact.id}>
                        {!isEdit && <button onClick={() => setIsEdit(true)}  style={{marginRight:"10px"}}>Edit</button>}
 {isEdit &&  <form onSubmit={e=>handleUpdateContact(e,contact.id)}>
              <button>Save</button>
              <input type="text" name="newName" placeholder="Adjust name..." />
              <input
                type="text"
                name="newPhone"
                placeholder="Adjust phone number..."
              />
            </form>}

            <span>
              {index + 1}. {contact.name} || {contact.number}
            </span>
            <button
              type="button"
              style={{ marginLeft: '15px' }}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTheContacs;
