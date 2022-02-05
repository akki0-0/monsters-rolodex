import React from 'react';
import './search-box.styles.css';
export const SearchBox = ({placeholder,handleChange}) => (
  /*input type = search gives the x button to clear the search field */
  <input type='search' placeholder={placeholder} onChange={handleChange}/>
);
