
require('dotenv').config()

var keys = require("./Keys.js");

const Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
let track = process.argv[2]

if(track === "movie-this"){
  var movies = require('./movie.js');
  console.log( typeof movies.movieInfo());
}

if (track === "spotify-this-song"){

spotify
.search({ type: 'track', query: process.argv[3] })
  .then(function(data) {
    const drilled = data.tracks.items[0]; 
    console.log("Artist:  " + drilled.album.artists[0].name);
    console.log("-------------------------------------");
    console.log("Song Name:  " + drilled.name);
    console.log("-------------------------------------");
    console.log("Preview Link:  " + drilled.preview_url);
    console.log("-------------------------------------");
    console.log("Album Name:  " + drilled.album.name);


  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}
       
if ( process.argv[3] === ""){

  spotify
  .search({ type: 'track', query: "The Sign" })
    .then(function(data) {
      const drilled = data.tracks.items[0]; 
      console.log("Artist:  " + drilled.album.artists[0].name);
      console.log("-------------------------------------");
      console.log("Song Name:  " + drilled.name);
      console.log("-------------------------------------");
      console.log("Preview Link:  " + drilled.preview_url);
      console.log("-------------------------------------");
      console.log("Album Name:  " + drilled.album.name);
  
  
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });
  }

  if (process.argv === "movie-this"){
    require("movie.js")
  }