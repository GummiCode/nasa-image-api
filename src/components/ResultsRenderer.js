import React, { useState } from 'react';
import SearchResults from './SearchResults';
import NoImagesMessage from './NoImagesMessage'
import ErrorMessage from './ErrorMessage';
import BlankMessage from './BlankMessage';

const ResultsRenderer = ({ searchResults, resultsLoading }) => {
      if (searchResults.notSearched) {
        return (null)
      } else if (resultsLoading) {
        return (null)
      } else if (searchResults.noSearchTerm) {
        return (
          <BlankMessage />
        )
      } else if (searchResults.images.length > 0) {
        return (
          <SearchResults searchResults = {searchResults} />
        )
      } else if (searchResults.images.length === 0 ) {
        return ( 
          <NoImagesMessage />
        )
      } else if (searchResults.errorStatus) {
        return (
          <ErrorMessage errorParams = {searchResults} />
        )
      }
}

  export default ResultsRenderer;


