import axios from 'axios';



const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
          console.log(response);
        const returnedImages =  response.data.collection.items;
        const parsedImages = returnedImages.filter( image => image.data[0].media_type === "image");
          console.log(parsedImages);
        const images = parsedImages.map( imageData => ({
          image: imageData.links[0].href,
          description: imageData.data[0].description_508
        }));
          console.log(images);
        return images;
        
      })
      .catch((error) => {
        console.log(error);
        // return (error.response); 
      })
  }
};

export default getImages;