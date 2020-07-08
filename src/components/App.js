import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import LoaderSpinner from './LoaderSpinner';
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

      {resultsLoading && 
        <LoaderSpinner />
      }

      {!resultsLoading &&
       <SearchResults
          searchResults = {searchResults} 
        />
      }

    </>
  )

}

export default App;
