import React from 'react';
import styled from 'styled-components';

const BlankStyles = styled.h2`
margin: 20px 20px;
color: #D6D4D0;
`

const BlankMessage = () => {
  return (
    <BlankStyles>
      Please enter a search term.
    </BlankStyles>
  )
};

export default BlankMessage;