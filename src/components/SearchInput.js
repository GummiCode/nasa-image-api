import React, { useState } from 'react';
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

  const [searchState, updateSearchState] = useState("");

  const performSearch = () =>  console.log(searchState);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <>
      <StyledSearchInput
      type="search"
      placeholder="Search"
      onChange={e => updateSearchState(e.target.value)}
      onKeyDown={handleKeyPress}
      />
    </>
  )
};

export default SearchInput;