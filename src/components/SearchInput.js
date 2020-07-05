import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearchInput = styled.input`
  height: 28px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid maroon;
  margin: 0 5px;
  padding: 0 5px;
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