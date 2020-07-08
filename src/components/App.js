import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import SearchResults from './SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [resultsLoading, setResultsLoading] = useState(false);

  console.log(searchResults);

  return (
    <>
      <GlobalStyles />

      <Header
        setSearchResults = {setSearchResults}
        setResultsLoading = {setResultsLoading}
       />

      {resultsLoading && <h1>Loading...</h1>}

      <SearchResults
        searchResults = {searchResults} 
      />

    </>
  )

}

export default App;
