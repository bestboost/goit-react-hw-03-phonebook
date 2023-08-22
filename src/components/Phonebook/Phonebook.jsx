import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import  {ContactBox, ContactList, ContactItem, ContactName, DeleteButton, Point} from './Phonebook.styled';

const Phonebook = ({contacts, onDeleteContact}) => (     
    <Box>
      <ContactBox>
        <ContactList > 
            {contacts.map(contact => (          
                <ContactItem key={contact.id} >
                  <Point></Point>
                    <ContactName>{contact.name}: {contact.number}</ContactName>
                  <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton> 
                </ContactItem>
              ))}
        </ContactList>
      </ContactBox> 
    </Box>     
); 

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Phonebook;