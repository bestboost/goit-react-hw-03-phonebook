import React from "react";
import PropTypes from 'prop-types';
import {TypeName, InputName, FilterBox} from './Filter.styled'

const Filter = ({value, onChange}) => (
            <FilterBox>
              <TypeName>Find contacts by name</TypeName>
              <InputName type="text" value={value} onChange={onChange}  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
            </FilterBox>  
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;