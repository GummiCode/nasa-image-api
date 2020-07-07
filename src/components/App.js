import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';

function App() {

  const [searchResults, setSearchResults] = useState({});
  console.log("Testing");
  console.log(searchResults);
  console.log("Testing!");

  return (
    <>
      <GlobalStyles />
      <Header
      setSearchResults = {setSearchResults}
       />
    </>
  )
}

export default App;
