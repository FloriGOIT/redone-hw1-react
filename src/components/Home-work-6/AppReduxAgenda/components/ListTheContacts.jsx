import { useState } from 'react';
import style from './apReduxAgenda.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../redux/contactsSlice';

const ListTheContacs = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [idState, setIdState] = useState("");
  const [updateContact, setUpdateContact] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.agendaRedux);
  const contactUpdeting = contacts.filter(contact => contact.id === idState) 
  if (contactUpdeting)setUpdateContact(contactUpdeting)
  const handleUpdateContact = (event, contactId) => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const newName = form.newName.value.trim();
    const newPhone = form.newPhone.value.trim();
    console.log(newName, newPhone);
    dispatch(editContact({ id: contactId, number: newPhone, name: newName }));
    setIsEdit(false);
  };
  return (
    <div className={style.listTheContacts}>
{isEdit && (
              <form onSubmit={e => handleUpdateContact(e, idState)}>
                <button>Save</button>
                <input
                  type="text"
            name="newName"
            value={updateContact.name}
                  placeholder="Adjust name..."
                />
                <input
                  type="text"
            name="newPhone"
            value={updateContact.number}
                  placeholder="Adjust phone number..."
                />
                <button type="button" onClick={()=>setIsEdit(false)} style={{ marginLeft: '10px' }}>Cancel</button>
              </form>
            )}
        {contacts.map((contact, index) => (
          <div key={contact.id}>
            {!isEdit && (
              <button
                onClick={() => {setIsEdit(true); setIdState(contact.id)}}
                style={{ marginRight: '10px' }}
              >
                Edit
              </button>
            )}
            

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
          </div>
        ))}
      </div>

  );
};

export default ListTheContacs;
