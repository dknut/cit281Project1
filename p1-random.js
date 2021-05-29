/*
    CIT 281 Project 1
    Name: Daniel Knutsen
*/
//All lowerclass alphabetical letters

const letters = "abcdefghijklmnopqrstuvwxyz";

//Random integer from min (inclusive) to max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateString() {
  //Sets string length
  let stringLength = getRandomInteger(5, 26);

  //Declares result string
  let result = "";

  //For each length generate above:
  for (i = 0; i < stringLength; i++) {
    //Generate a random character from the alphabet
    let randomLetter = letters.charAt(getRandomInteger(0, 26));

    //Add character onto result
    result += randomLetter;
  }
  console.log(result);
}

generateString();
