import PropTypes from 'prop-types';
import React, {Component} from 'react';
import  {Form, TypeName, InputName, TypePhone, InputPhone, AddButton} from './Form.styled';
import {nanoid} from 'nanoid'; 

class Forms extends Component {

    static propTypes = {     
        contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
        onSubmit: PropTypes.func.isRequired,     
    };
   
      state = {
        name: '',
        number: '',  
        };

 handelChange = e => {
    const {name, value} = e.currentTarget;
   
    this.setState({ [name]: value});
 };

 handelSubmit = e => {

    e.preventDefault();

   this.props.onSubmit(Object.assign({id:nanoid()}, this.state))

   this.reset ();
 }; 

 reset = () => {
    this.setState({name: '', number: ''})
 }

 render () {
   const nameId = nanoid();
   const numberId = nanoid();

    return (
      <Form onSubmit={this.handelSubmit}>
          <TypeName htmlFor={nameId}>Name</TypeName>
          <InputName id={nameId}
              type="text"
              name="name"
            //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handelChange}
              />
          <TypePhone htmlFor={numberId}>Number</TypePhone>    
          <InputPhone id={numberId}
              type="tel"
              name="number"
            //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handelChange}
              />
          <AddButton type="submit">Add contact</AddButton>  
        </Form> 
    )}
};

export default Forms;