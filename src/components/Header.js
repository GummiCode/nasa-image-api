import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderImage from './HeaderImage';
import SearchInput from './SearchInput';
import nasaLogo from '../assets/images/nasa.png';

const HeaderStyles = styled.div`
  height: 60px;
  width: calc(100vw - 20px);
  margin: 0;
  padding: 0 10px;
  background: #404138;
  position: sticky;
  top: 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;

  @media (max-width: 640px) {
    height: 50px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const HeaderText = styled.p`
  margin: 0 5px 0 5px;
  width: 230px;
  font-size: 2.2em;
  color: red;

  @media (max-width: 640px) {
    font-size: 1.8em;
  }

  @media (max-width: 540px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }

  @media (max-width: 355px) {
    font-size: 1em;
  }
`
const Header = ({ setSearchResults, setResultsLoading }) => {

  return (
    <HeaderStyles>
      <HeaderImage 
        src={nasaLogo} 
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
