import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import Header from './Header';
import LoaderSpinner from './LoaderSpinner';
import SearchResults from './SearchResults';
import NoImagesMessage from './NoImagesMessage'
import ErrorMessage from './ErrorMessage';

function App() {

  const [searchResults, setSearchResults] = useState({notSearched: true});
  const [resultsLoading, setResultsLoading] = useState(false);

  const chooseRender = ( searchResults ) => {
    if (searchResults.notSearched) {
      // renders nothing
    } else if (searchResults.images?.length > 0) {
      return (
        <SearchResults searchResults = {searchResults} />
      )
      } else if (searchResults.images?.length === 0) {
      return ( 
        <NoImagesMessage />
      )
    } else if (searchResults.errorStatus) {
      return (
        <ErrorMessage errorParams = {searchResults} />
      )
    }
  }

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
        chooseRender(searchResults)};
    </>
  )
}

export default App;