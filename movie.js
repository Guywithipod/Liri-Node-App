const axios = require("axios");

const fs = require("fs");

let movie = process.argv[3];

let args = "";

for (let i = 4; i < args.legnth; i++) {

    args += process.argv[i] 

}

if (process.argv[2] === "movie") {
queryUrl = "http://www.omdbapi.com/?apikey=87a066ba&t=" + movie;

axios.get(queryUrl)
    .then(function (response) {
        const movieYear = response.data.Year;

        const movieRated = response.data.Rated;

        const movieReleased = response.data.Released;

        const moviePlot = response.data.Plot;

        console.log("--------------------------------------");
        console.log("Year:" + movieYear);
        console.log("--------------------------------------");
        console.log("Rated:" + movieRated);
        console.log("--------------------------------------");
        console.log("Released:" + (movieReleased));
        console.log("--------------------------------------");
        console.log("Plot:" + moviePlot);
        console.log("--------------------------------------");

        const movieString = `${movieYear}
        ${movieRated}
        ${movieReleased}
        ${moviePlot}
        ----------------------------------------`;

        fs.appendFile("movieFile.txt", movieString, function (err) {
            if (err) {
                console.log("error");
            }
        })
    })
    .catch(function (error) {
        console.log(error);
    })

}
