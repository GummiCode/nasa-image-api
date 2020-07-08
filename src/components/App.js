import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import LoaderSpinner from './LoaderSpinner';
import SearchResults from './SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [searchedBefore, setSearchedBefore] = useState(false);

  console.log(searchResults);

  return (
    <>
      <GlobalStyles />

      <Header
        setSearchResults = {setSearchResults}
        setResultsLoading = {setResultsLoading}
        setSearchedBefore = {setSearchedBefore}
       />

      {resultsLoading && 
        <LoaderSpinner />
      }
  
      {!resultsLoading &&
       <SearchResults
          searchResults = {searchResults} 
          searchedBefore = {searchedBefore}
        />
      }
    </>
  )
}

export default App;