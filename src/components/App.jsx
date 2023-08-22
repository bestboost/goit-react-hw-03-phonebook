import React, {Component} from 'react';
import { Box } from '../components/Box';
import { Tiltle, Contacts} from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook'
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';

class App extends Component {

 state = {
  contacts: [],
  filter: '',
  };   

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
  
    if (parsedContacts) {
      this.setState({contacts: parsedContacts});
    }
  };
  
  componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts) {
        localStorage.setItem('contacts', 
        JSON.stringify(this.state.contacts))
      }
    };

 formSubmitHandler = ({name, number, id}) => {     
    const contact = {
      name,
       number,
        id,
    }         
    
    const nextName = contact.name.toLowerCase()
    const prevName = this.state.contacts
          .map(c => c.name.toLowerCase())
          .filter(con => con.includes(nextName));
 
    if(prevName.includes(nextName)) {
          alert(nextName + ' is already in contacts');
          return;
    }
      this.setState(prevState =>
        ({contacts: [contact, ...prevState.contacts]})
      )   
  };    
  
 nameFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };
  
 deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts
      .filter(contact => contact.id !== id),
    }));
  };

  render () {
    const  {filter, contacts} = this.state;
    const normolizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normolizedFilter));

  return (
    <Box
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 40,
      }}
    >
         <Tiltle>Phonebook</Tiltle> 
      <Forms  onSubmit={this.formSubmitHandler} />   
        <Contacts>Contacts</Contacts>
      <Filter value={filter} onChange={this.nameFilter}/>     
      <Phonebook contacts={visibleContacts} 
                 onDeleteContact={this.deleteContact}/>
    </Box>
  );
 };
};

export default App;