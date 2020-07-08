import axios from 'axios';

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then(response => {
          if (response.statusText === "OK") {
            const returnedImages =  response.data.collection.items;
            const parsedImages = returnedImages.filter( image => image.data[0].media_type === "image");
            console.log(returnedImages);
            const images = parsedImages.map( imageData => ({
              id: imageData.data[0].nasa_id,
              image: imageData.links[0].href,
              description: imageData.data[0].description_508
            }));
          return {
            images,
          }
        };
    })
      .catch(error => {
        return ({
          errorStatus: error.response.status,
          errorText: error.response.statusText
        })
      })
  }
};

export default getImages;
