const request = require("request");
const args = process.argv.slice(2);


const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed not found.");
    } else {
      callback(data[0].description);
    }
  });
}

module.exports = { fetchBreedDescription };