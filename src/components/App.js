import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import SearchResults from './SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  return (
    <>
      <GlobalStyles />

      <Header
        setSearchResults = {setSearchResults}
       />

      <SearchResults
        searchResults = {searchResults} 
      />

    </>
  )

}

export default App;
