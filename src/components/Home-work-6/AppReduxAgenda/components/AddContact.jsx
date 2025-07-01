import { useState } from 'react';
import { addNewContact } from '../redux/contactsSlice';
import style from './apReduxAgenda.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const AddContact = () => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.agendaRedux);
  const handleNewContact = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const nameInput = form.fullName.value.trim();
    const phoneInput = form.phone.value.trim();
    const error = contacts.find(
      contact =>
        contact.name.toLowerCase() === nameInput.toLowerCase() ||
        contact.number.toLowerCase() === phoneInput.toLowerCase()
    );
    if (error) {
      alert('Duplicated contact');
      return;
    }
    setSuccess(true);
    const phoneInputRegEx = phoneInput.match(/\d+/g).join('');
    const newContact = {
      id: phoneInputRegEx,
      number: phoneInput,
      name: nameInput,
    };
    dispatch(addNewContact(newContact));
    e.currentTarget.reset();
    setTimeout(() => {
      setSuccess(false); // hide after 3s
    }, 3000);
  };

  return (
    <div className={style.AddContact}>
      {success && (
        <p style={{ color: 'rgb(18, 156, 18)', fontWeight: 'bold' }}>
          Contact was added successfully!!!
        </p>
      )}
      <form onSubmit={handleNewContact}>
        <label htmlFor="fullNameid"> Add full name: </label>
        <input
          id="fullNameid"
          type="text"
          name="fullName"
          required
          pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        />
        <br />
        <label htmlFor="phoneid">Add phone number: </label>
        <input
          id="phoneid"
          type="text"
          name="phone"
          required
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddContact;
