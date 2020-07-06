import React from 'react';
import styled from 'styled-components';

const StyledSearchInput = styled.input`
  height: 28px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid maroon;
  margin: 0 5px;
  padding: 0 5px;
  color: #F6F4F0;
  font-size: 1em;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`

const SearchInput = (props) => {
  return (
    <>
      <StyledSearchInput
      type="text"
      placeholder="Search"/>
    </>
  )
};

export default SearchInput;