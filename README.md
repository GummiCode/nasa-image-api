# NASA Image Search 🛰️

## Background

NASA host [an API of image and video assets for public use](https://api.nasa.gov/). I created a simple image search for this asset library.

You can try it out [here](https://devarrowsmith.github.io/nasa-image-search/).

---

## Motivation

My partner proposed this project. He provided a remit which I implemented. This project allowed me to work on a few techs I was already a little familiar with, and try out a few new ones at the same time:

- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- Interfacing a React front-end with an API.

---

## Screenshots

![Screenshot of the search engine. The term 'cloud' has been searched. Images related to this are shown, in a grid; most are aerial views of clouds.](/readme_images/desktop_screenshot_1.png)

---

## Installation

The game is hosted on [GitHub Pages](https://devarrowsmith.github.io/nasa-image-search/) and can be run from there.

To install the repo locally:
1. [Clone this repo](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
2. Run `npm install` from root.
3. To run the repo locally run `npm start`.

---

## Using the App

- Enter a search term into the search field in the page's header, then press enter or click on the magnifying glass in the search field.
- If the search term matches part of the metadata from any images in the NASA images api, these will be displayed in the area below the header bar. This area is scrollable.
- If the search term does not match part of the metadata for any of the images in the NASA images API then a message will be displayed stating this.
- If the server returns an error then the error code and a description of the error state will be displayed below the header bar.
- A distinct error message is also shown if the user tried to initiate a search without entering a search term into the search field.

---

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

---

## Future Work

- The outstanding tests detailed above (for the getImages controller and SearchInput component) need to be written and validated.
- Add media queries to make the app look better on mobile devices.
- Make the rendered images clickable, and display an enlarged version of the clicked image over the viewport. Include a close button to return the user to the homepage.

---

## Framework

Built with [React](https://github.com/facebook/react).  
Styled with [styled-components](https://styled-components.com/).  
Tests written with [react-testing-library](https://github.com/testing-library/react-testing-library).

---

## Credits

This application uses Open Source components. You can find the source code of their open source projects along with license information below. Huge thanks to all of the people who contribute to this work ❤️️ 

- Project: [React](https://github.com/facebook/react)  
Copyright (c) Facebook, Inc. and its affiliates.  
License: [MIT](https://github.com/facebook/react/blob/master/LICENSE)

- Project: [react-testing-library.](https://github.com/testing-library/react-testing-library)  
Copyright (c) 2017 Kent C. Dodds.  
License: [MIT](https://github.com/testing-library/react-testing-library/blob/master/LICENSE)

- Project: [styled-components](https://github.com/styled-components/styled-components)  
Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber  
License: [MIT](https://github.com/facebook/react/blob/master/LICENSE)

- Project: [NASA Image and Video Library](https://api.nasa.gov/)  
Public domian.
