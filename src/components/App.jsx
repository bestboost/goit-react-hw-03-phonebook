import React, {Component} from 'react';
import { Box } from '../components/Box';
import { Tiltle, Contacts} from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook'
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';
import basicContacts from '../../src/basicContacts';


class App extends Component {

 state = {
  contacts: basicContacts,
  filter: '',
  };   

  formSubmitHandler = ({name, number, id}) => {     
    const contact = {
      name,
       number,
        id,
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
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render () {
    const  {filter, contacts} = this.state;
    const normolizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normolizedFilter),);
    const sameName = visibleContacts.map(contact => contact.name.toLowerCase())
      

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
      <Forms  onSubmit={this.formSubmitHandler} contacts={sameName}/>   
           <Contacts>Contacts</Contacts>
      <Filter value={filter} onChange={this.nameFilter}/>     
      <Phonebook contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    </Box>
  );
};
};

export default App;