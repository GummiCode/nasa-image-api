import React from 'react';
import styled from 'styled-components';
import HeaderImage from './HeaderImage';
import SearchInput from './SearchInput';

const HeaderStyles = styled.div`
  height: 60px;
  width: 100vw;
  margin: 0;
  padding: 0 10px;
  background: #404138;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`;


const Header = ({ setSearchResults }) => {

  return (
    <HeaderStyles>
      <HeaderImage 
        src="./images/nasa.png" 
        alt="NASA logo"
      />
      <SearchInput
        setSearchResults={setSearchResults}
       />
    </HeaderStyles>
  )
};

export default Header;