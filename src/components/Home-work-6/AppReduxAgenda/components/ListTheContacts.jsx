import { useState, useEffect } from 'react';
import style from './apReduxAgenda.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../redux/contactsSlice';
import SearcContacts from './SearchContact';

const ListTheContacs = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [idState, setIdState] = useState('');
  const [updateContact, setUpdateContact] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.agendaRedux);
  const filter = useSelector(state => state.filterAgendaRedux.filter);
  const a = [
    {
      id: 'AmaDYV0A_5ckKM8OCvEu8',
      numberRE: '0747643648',
      number: '0747.643.648',
      name: 'Flori Vachente',
    },

    {
      id: 'Q7B-FEr91AwrdfJn9VVM1',
      numberRE: '40755141215',
      number: '+407-55-14-12-15',
      name: 'Cornelia Vachente',
    },

    {
      id: 'uHv22r7oIm-XtCLJNsNUX',
      numberRE: '407020202',
      number: '+407-02.02.02',
      name: 'Iorga Ana Maria',
    },
  ];

  const filteredContacts = a.filter(contact =>
    contact.name.toLowerCase().includes("flo".toLowerCase())
  );
  console.log("a",a)
  const finalArr = filter ? contacts : filteredContacts;
  console.log('contacts', contacts);
  console.log('finalArr', finalArr);
  useEffect(() => {
    if (isEdit) {
      const foundContact = contacts.find(contact => contact.id === idState);
      setUpdateContact(foundContact);
    }
  }, [isEdit, idState, contacts]);

  const handleUpdateContact = (event, contactId) => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const newName = form.newName.value.trim();
    const newPhone = form.newPhone.value.trim();
    dispatch(editContact({ id: contactId, number: newPhone, name: newName }));
    setIsEdit(false);
  };
  return (
    <div className={style.listTheContacts}>
      <h3>Search agenda:</h3>
      <SearcContacts />
      {isEdit && (
        <form onSubmit={e => handleUpdateContact(e, idState)}>
          <button>Save</button>
          <input
            type="text"
            name="newName"
            value={updateContact.name || ''}
            placeholder="Adjust name..."
            onChange={e =>
              setUpdateContact(prev => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            name="newPhone"
            placeholder="Adjust phone number..."
            value={updateContact.number || ''}
            onChange={e =>
              setUpdateContact(prev => ({ ...prev, number: e.target.value }))
            }
          />
          <button
            type="button"
            onClick={() => setIsEdit(false)}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </form>
      )}
      {contacts.map((contact, index) => (
        <div key={contact.id}>
          {!isEdit && (
            <button
              onClick={() => {
                setIsEdit(true);
                setIdState(contact.id);
              }}
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
