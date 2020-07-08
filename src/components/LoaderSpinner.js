import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoaderContainer = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const LoaderSpinner = () => {
  return (
    <LoaderContainer>
      <Loader
        type="RevolvingDot"
        color="red"
        height={200}
        width={200}
        timeout={3000}
      />
    </LoaderContainer>
  );
}

export default LoaderSpinner;
