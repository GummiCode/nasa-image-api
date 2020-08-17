import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import LoaderSpinner from './LoaderSpinner';
import ResultsRenderer from './ResultsRenderer'



function App() {

  const [searchResults, setSearchResults] = useState({notSearched: true});
  const [resultsLoading, setResultsLoading] = useState(false);

  console.log(searchResults);

  return (
    <>
      <GlobalStyles />

      <Header
        setSearchResults = {setSearchResults}
        setResultsLoading = {setResultsLoading}
       />

        <LoaderSpinner
          resultsLoading = {resultsLoading} 
        />

        <ResultsRenderer
          resultsLoading = {resultsLoading}
          searchResults={searchResults}
        />
    </>
  )
}

export default App;
