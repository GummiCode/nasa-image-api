import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import LoaderSpinner from './LoaderSpinner';
import ResultsRenderer from './ResultsRenderer'



function App() {

  const [searchResults, setSearchResults] = useState({notSearched: true});
  const [resultsLoading, setResultsLoading] = useState(false);

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
        <ResultsRenderer
          searchResults={searchResults}
        />
      };
    </>
  )
}

export default App;
