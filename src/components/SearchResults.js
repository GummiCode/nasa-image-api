import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchResultsContainer = styled.div`
  width: auto; 
  min-width: 600px; 
  margin: 20px;
  display: flex; 
  flex-flow: row wrap;
  justify-content: start;
  align-items: start;
`;

const ScaledImage = styled.img`
  width: 270px;
  height: 300px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`
const ErrorMessage = styled.h2`
  margin: 0 10px;
  color: #D6D4D0;
`

const conditionalRender = (searchResults, searchedBefore) => {
  if (Array.isArray(searchResults) && searchResults.length === 0 && searchedBefore) {
    return (
      <ErrorMessage>No images were found. Please try a different search term.</ErrorMessage>
    )
  } else if (typeof searchResults === "string") {
    return (
      <ErrorMessage>{searchResults}</ErrorMessage>
    )
  } else {
    return (
      searchResults.map((result) => (
        <ScaledImage
          key={result.id}
          src={result.image}
          alt={result.description}
        />
      ))
    )
  }
};

const SearchResults = ({ searchResults, searchedBefore }) => {

   return (
      <SearchResultsContainer>
        {
          conditionalRender(searchResults, searchedBefore)
        }
      </SearchResultsContainer>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array
}

export default SearchResults;

