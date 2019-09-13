const axios = require("axios");

const fs = require("fs");

let movie = process.argv[3];

let args = "";

for (let i = 4; i < args.legnth; i++) {

    args += process.argv[i] 

}

module.exports = {
     movieInfo() {

    queryUrl = "http://www.omdbapi.com/?apikey=87a066ba&t=" + movie;
    
    axios.get(queryUrl)
        .then(function (response) {
    
            const movieTitle = response.data.Title;
    
            const movieYear = response.data.Year;
    
            const movieIMDBRating = response.data.Ratings[0].Value;
    
            const movieRtRating = response.data.Ratings[1].Value;
    
            const movieCountry = response.data. Country;
    
            const movieLanguage = response.data.Language;
    
            const moviePlot = response.data.Plot;
    
            const movieActors = response.data.Actors;
    
            console.log("--------------------------------------");
            console.log("Title: " + movieTitle);
            console.log("--------------------------------------");
            console.log("Year: " + movieYear);
            console.log("--------------------------------------");
            console.log("IMDB rating: " + movieIMDBRating);
            console.log("--------------------------------------");
            console.log("Rotton Tomatoes rating: " + movieRtRating);
            console.log("--------------------------------------");
            console.log("Country: " + movieCountry);
            console.log("--------------------------------------");
            console.log("Language: " + movieLanguage);
            console.log("--------------------------------------");
            console.log("Plot: " + moviePlot);
            console.log("--------------------------------------");
            console.log("Actors: " + movieActors);
            console.log("--------------------------------------");
    
            const showString = `${movieTitle}
            ${movieIMDBRating}
            ${movieRtRating}
            ${movieCountry}
            ${movieLanguage}
            ${moviePlot}
            ${movieActors}
            ----------------------------------------`;
    
            fs.appendFile("log.txt", showString, function (err) {
                if (err) {
                    console.log("error");
                }
            })
            if(process.argv[3] === undefined){

            }
        })
        .catch(function (error) {
            console.log(error);
        })
              
if ( process.argv[3] === undefined){

 queryUrl = "http://www.omdbapi.com/?apikey=87a066ba&t=mr+nobody" ;
    
    axios.get(queryUrl)
        .then(function (response) {
    
            const movieTitle = response.data.Title;
    
            const movieYear = response.data.Year;
    
            const movieIMDBRating = response.data.Ratings[0].Value;
    
            const movieRtRating = response.data.Ratings[1].Value;
    
            const movieCountry = response.data. Country;
    
            const movieLanguage = response.data.Language;
    
            const moviePlot = response.data.Plot;
    
            const movieActors = response.data.Actors;
    
            console.log("--------------------------------------");
            console.log("Title: " + movieTitle);
            console.log("--------------------------------------");
            console.log("Year: " + movieYear);
            console.log("--------------------------------------");
            console.log("IMDB rating: " + movieIMDBRating);
            console.log("--------------------------------------");
            console.log("Rotton Tomatoes rating: " + movieRtRating);
            console.log("--------------------------------------");
            console.log("Country: " + movieCountry);
            console.log("--------------------------------------");
            console.log("Language: " + movieLanguage);
            console.log("--------------------------------------");
            console.log("Plot: " + moviePlot);
            console.log("--------------------------------------");
            console.log("Actors: " + movieActors);
            console.log("--------------------------------------");
    
            const showString = `${movieTitle}
            ${movieIMDBRating}
            ${movieRtRating}
            ${movieCountry}
            ${movieLanguage}
            ${moviePlot}
            ${movieActors}
            ----------------------------------------`;
    
            fs.appendFile("log.txt", showString, function (err) {
                if (err) {
                    console.log("error");
                }
            })
            if(process.argv[3] === undefined){
                
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
}