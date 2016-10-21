/**
 *   @author Schwartz, Harris (hfschwartz21@gmail.com)
 *   @version 0.0.1
 *   @summary Project 3 code || created: 10.11.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieTitle;
let rating, averageRating, numRatings, totalRating;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse == 1) {
        setMovieTitle();
        setRating();
        setNumRatings();
        setTotalRating();
        setAverageRating();
        printAverageRating();
    }
}

main();

function setContinueResponse() {
    if (continueResponse == null) {
        continueResponse = Number(PROMPT.question(`\nWould you like to rate a movie? [0=No, 1=Yes]: `));
    } else if (continueResponse == 0) {
        setAverageRating();
    }
}

function setMovieTitle() {
    movieTitle = PROMPT.question('\nWhat movie will you be rating? ');
}

function setRating() {
    let answered = 0;
    let counter = 0;
    const MAX_TRIES = 3;
    const MAX_RATING = 5;

    while (counter < MAX_TRIES && answered != "yes") {
       rating = Number(PROMPT.question(`\nHow would you rate ${movieTitle} on a scale of 0-5 stars? `));
       if (rating < 0 || rating > MAX_RATING) {
           console.log(`\n${rating} is an incorrect value please try again.`);
           counter++
       } else if (rating >= 0 && rating <= MAX_RATING) {
           answered = "yes"
       }
   }
}

function setNumRatings() {
    if (numRatings >= 1 ) {
        numRatings = numRatings + 1
    } else if (numRatings == null) {
        numRatings = 1
    }
}

function setTotalRating() {
    if (totalRating != null) {
        totalRating = totalRating +rating
    } else {
        totalRating = rating
    }
}

function setAverageRating() {
    averageRating = Number((totalRating / numRatings))
}

function printAverageRating(){
    console.log(`\nThe average rating for ${movieTitle} is: ${averageRating}`);
}