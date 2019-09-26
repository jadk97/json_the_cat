const request = require("request");
const args = process.argv.slice(2);
const breedFetcher = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.log(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Breed not found.");
      } else {
        console.log(data[0].description);
      }
    }
  });
};

breedFetcher(args[0]);