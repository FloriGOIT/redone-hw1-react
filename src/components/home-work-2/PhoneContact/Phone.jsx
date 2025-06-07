import React from 'react';

class Phone extends React.Component {
  state = { contactState: '', phoneState: '' };
  setContactState = contactInput =>
    this.setState({ contactState: contactInput });
  setPhoneState = phoneInput => {this.setState({ phoneState: phoneInput });console.log(this.state)}
  componentDidUpdate(prevProps, prevState){if(prevState.state !== this.state){this.props.setContacts({id:"next", ...this.state})}}

  render() {
    const { contacts, setContacts, filter, setFilter } = this.props;
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm
          setContactState={this.setContactState}
          setPhoneState={this.setPhoneState}
        />
        {this.state.contactState !== "" ? <p>
          {this.state.contactState} : {this.state.phoneState} was last added in your
          phonebook
        </p>:null}

        <h2>Contacts</h2>
        <Filter
          contacts={contacts}
          setContacts={setContacts}
          filter={filter}
          setFilter={setFilter}
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

class ContactForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const nameInput = event.target.elements.nameUser.value;
    const phoneInput = event.target.elements.phoneUser.value;
          this.props.setContactState(nameInput);
          this.props.setPhoneState(phoneInput)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName"></label>
        <input
          type="text"
          id="userName"
          name="nameUser"
          pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <label htmlFor="userPhone"></label>
        <input
          type="tel"
          id="userPhone"
          name="phoneUser"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add new contact</button>
      </form>
    );
  }
}
class Filter extends React.Component {
  render() {
    return <p>Filter</p>;
  }
}

class ContactList extends React.Component {
  render() {
    return <p>ContactList</p>;
  }
}

export default Phone;


/*       */