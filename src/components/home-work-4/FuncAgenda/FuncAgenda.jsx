import style from './funcAgenda.module.scss';
import { useState } from 'react';

// un arr initial 1. Addcontact, 2. Searc contact, 3.Show contacts

export const FuncAgenda = () => {
  const [arr, setArr] = useState([
    { id: 'id-1', namE: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', namE: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', namE: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', namE: 'Annie Copeland', number: '227-91-26' },
  ]);

  const handleNewContact = input => setArr(prevArr => [...prevArr, input]);
        console.log('arr', arr);
        
  return (
          <section className={style.agendaAll}>
                  <h2>New contact</h2><br/>
                  <AddContactF handleNewContact={handleNewContact} /><br /><br />
                  <h2>Your contacts</h2>
                  <ShowContacts arr={arr} />
    </section>
  );
};

const AddContactF = props => {
  const handleContact = e => {
    e.preventDefault();
    const nameC = e.target.elements.nameC.value.trim();
    const phoneC = e.target.elements.phoneC.value.trim();
    const newContact = { id: `id-${Date.now()}`, namE: nameC, number: phoneC };
    props.handleNewContact(newContact);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleContact}>
      <label htmlFor="contactName">Name: </label>
      <input
        type="text"
        id="contactName"
        name="nameC"
        placeholder="Add name..."
        pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
        required
      />
      <br />
      <label>Phone: </label>
      <input
        type="text"
        id="phoneContact"
        name="phoneC"
        placeholder="Add phone numver... "
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        required
                  />
                  <br />
                  <button type="submit">Add contact</button>
                  
    </form>
  );
};

const ShowContacts = props => {
        return (<ul className={style.showContact}>
                {props.arr.map(({ id, namE, number }) => <li key={id}>
                        <span>{namE}</span>
                        <span>{number}</span>
                        <button type="button">Delete</button>
                </li>)}
         </ul>)
}
