# NASA Image Search

## Introduction

This app fetches images from NASA's image API (https://api.nasa.gov/) using a string search term entered by the user. The app parses the images from the search results and displays them in a scrollable area of the browser window.

This is a component-based React app. Styling is implemented almost exclusively using the styled-components node package, with the exception of one line of styling applied to index.html to negate its automatic margins.

## Aims

- Implement an introductory-level React app
- Practice styled-components
- Practice testing of React components
- Interface a React front-end with an API back-end.

## Running the App

1. Open a bash command terminal.
2. Navigate to this directory.
3. Enter the command ```npm start```. The app will load in your default browser.

## Using the App

- Enter a search term into the search field in the page's header, then press enter or click on the magnifying glass in the search field.
- If the search term matches part of the metadata from any images in the NASA images api, these will be displayed in the area below the header bar. This area is scrollable.
- If the search term does not match part of the metadata for any of the images in the NASA images API then a message will be displayed stating this.
- If the server returns an error then the error code and a description of the error state will be displayed below the header bar.
- A distinct error message is also shown if the user tried to initiate a search without entering a search term into the search field.

## Testing

Tests have been written for most of the components of the app. Each component has a render test in the form of a snapshot test. Components with conditional rendering have more extensive tests to assess each of their functions.

Two components do not yet have full tests.

- getImages (controller) fetches API data. Tests have not been written for this script. This needs to be done.
- SearchInput (controller) renders the search input field and manages implementation of the getImages controller. A snapshot render test has been written for this component but additional tests are required to check its interaction with the getImages controller.


To run the tests follow the follwing steps:

1. Open a bash command terminal.
2. Navigate to this directory.
3. Enter the command ```npm test```. The tests will run in the console.
4. Success and fail states will be displayed in the console, along with instructions regarding how to examine and process the test data.

## Next Steps

### Top Priority:

- The outstanding tests detailed above (for the getImages controller and SearchInput component) need to be written and validated.

### Optional Additions:

- Add media queries to make the app look better on mobile devices.
- Display an image description overlayed on an image when the mouse cursor hovers over it. The required data is already includes in the parsed image data provided by getImages so this step just requires appropriate modification/addition of some aesthetic components.
- Make the rendered images clickable, and display an enlarged version of the clicked image over the viewport. Include a close button to return the user to the homepage.

