import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: #F6F4F0;
    background-image: url(./images/moon3.jpg);
    background-size: cover;
    background-attachment: fixed;
    color: #363537;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: start;
  }
`