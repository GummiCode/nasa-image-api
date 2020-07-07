import React from 'react';
import styled from 'styled-components';

const SearchResultsStyles = styled.div`
  color: blue;
`;



const SearchResults = (props) => {

  return (
     <> 
      <SearchResultsStyles>  
        <p>Search Results Section</p>
      </SearchResultsStyles>
    </>
  );
};

export default SearchResults;

