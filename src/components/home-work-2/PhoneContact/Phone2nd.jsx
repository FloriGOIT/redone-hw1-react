import React from 'react';

class Phone2nd extends React.Component {
  state = { name2: '', number2: '' };
  handleContact = input => this.setState(input);

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      this.props.handleSetArrContacts(this.state);
    }
  }
  render() {
    console.log('state1', this.state);
    //const { arrContacts, filterContacts } = this.props;
    return (
      <section>
        <h2>Phone book-2nd</h2>
        <NewContact handleContact={this.handleContact} />
      </section>
    );
  }
}
export default Phone2nd;

class NewContact extends React.Component {
  handleNewContact = event => {
    event.preventDefault();
    const nameInput2 = event.target.elements.name2.value;
    const numberInput2 = event.target.elements.number2.value;
    let input = { id: Date.now(), name2: nameInput2, number2: numberInput2 };
    this.props.handleContact(input);
  };
  render() {
    return (
      <form onSubmit={this.handleNewContact}>
        <label htmlFor="newContact" name="contactNew">
          Name:{` `}
        </label>
        <input
          id="newContact"
          type="text"
          name="name2"
          pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <br />
        <label htmlFor="newNumber" name="numberNew">
          Number:{` `}
        </label>

        <input
          type="text"
          id="newNumber"
          name="number2"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

//<FilterContact />
//<ListContact/>
