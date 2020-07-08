import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorStyles = styled.h2`
margin: 20px 20px;
color: #D6D4D0;
`

const NoImagesMessage = () => {
  return (
    <ErrorStyles>
      {`No images found. Please try a different search term.`}
    </ErrorStyles>
  )
};

export default NoImagesMessage;