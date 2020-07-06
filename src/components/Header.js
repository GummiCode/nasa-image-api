import React from 'react';
import styled from 'styled-components';
import HeaderImg from './HeaderImg';
import SearchInput from './SearchInput';

const HeaderContainer = styled.div`
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

function Header() {
  return (
    <HeaderContainer>
      <HeaderImg 
        src="./images/nasa.png" 
        alt="NASA logo" 
        id="nasa-logo-1"
      />
      <SearchInput />
    </HeaderContainer>
  )
}

export default Header;