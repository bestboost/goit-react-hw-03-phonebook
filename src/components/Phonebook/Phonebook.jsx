import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Box } from '../Box';
import  {ContactBox, ContactList, ContactItem, ContactName, DeleteButton, Point} from './Phonebook.styled';


class Phonebook extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
          })
        ),
        onDeleteContact: PropTypes.func.isRequired,
    };
    

   render () {

         return (
            <Box>
             <ContactBox>
                <ContactList > 
                    {this.props.contacts.map(contact => (          
                        <ContactItem key={contact.id} >
                          <Point></Point>
                            <ContactName>{contact.name}: {contact.number}</ContactName>
                          <DeleteButton onClick={() => this.props.onDeleteContact(contact.id)}>Delete</DeleteButton> 
                        </ContactItem>
                      ))}
                </ContactList>
             </ContactBox> 
            </Box>      
    )}
};  

export default Phonebook;