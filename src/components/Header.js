import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderImage from './HeaderImage';
import SearchInput from './SearchInput';

const HeaderStyles = styled.div`
  height: 60px;
  width: 100vw;
  margin: 0;
  padding: 0 10px;
  background: #404138;
  position: sticky;
  top: 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`;

const HeaderText = styled.p`
  margin: 0 5px 0 5px;
  width: 230px;
  font-size: 2.2em;
  color: red;
`
const Header = ({ setSearchResults, setResultsLoading }) => {

  return (
    <HeaderStyles>
      <HeaderImage 
        src="./images/nasa.png" 
        alt="NASA logo"
      />
      <HeaderText>Image Search</HeaderText>
      <SearchInput
        setSearchResults={setSearchResults}
        setResultsLoading={setResultsLoading}
       />
    </HeaderStyles>
  );

};

Header.propTypes = {
  setSearchResults: PropTypes.func,
  setResultsLoading: PropTypes.func
};

export default Header;
