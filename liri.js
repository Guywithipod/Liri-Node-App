
require('dotenv').config()

var keys = require("./Keys.js");

const Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 

let track = process.argv[2]


if (track === "spotify-this-song"){

spotify
.search({ type: 'track', query: process.argv[3] })
  .then(function(data) {
    const drilled = data.tracks.items[0]; 
    console.log(drilled.album.name);
    

  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}
      