import axios from 'axios';



const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=moon`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error); 
      })
  }
};

export default getImages;