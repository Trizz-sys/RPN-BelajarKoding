// soal 1

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

console.log("\n");
// soal 2

let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2] + word2[3];
let exampleFirstWord2 =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];
let exampleFirstWord3 = word2[15] + word2[16];
let exampleFirstWord4 = word2[18] + word2[19];
let exampleFirstWord5 = word2[21] + word2[22] + word2[23] + word2[24];
console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleFirstWord2);
console.log("Third Word: " + exampleFirstWord3);
console.log("Fourth Word: " + exampleFirstWord4);
console.log("Fifth Word: " + exampleFirstWord5);

console.log("\n");

// Soal 3
let word3 = "wow JavaScript is so cool";
let exampleFirstWord6 = word3.substring(0, 3);
let exampleFirstWord7 = word3.substring(4, 14);
let exampleFirstWord8 = word3.substring(15, 17);
let exampleFirstWord9 = word3.substring(18, 20);
let exampleFirstWord10 = word3.substring(21, 25);

console.log("First Word: " + exampleFirstWord6);
console.log("Second Word: " + exampleFirstWord7);
console.log("Third Word: " + exampleFirstWord8);
console.log("Fourth Word: " + exampleFirstWord9);
console.log("Fifth Word: " + exampleFirstWord10);

console.log("\n");

// soal 4
let firstWordLength = exampleFirstWord6.length;
let secondWordLength = exampleFirstWord7.length;
let thirdWordLength = exampleFirstWord8.length;
let fourthWordLength = exampleFirstWord9.length;
let fifthWordLength = exampleFirstWord10.length;

console.log(
  "First Word: " + exampleFirstWord6 + ", with length: " + firstWordLength
);
console.log(
  "Second Word: " + exampleFirstWord7 + ", with length: " + secondWordLength
);
console.log(
  "Third Word: " + exampleFirstWord8 + ", with length: " + thirdWordLength
);
console.log(
  "Fourth Word: " + exampleFirstWord9 + ", with length: " + fourthWordLength
);
console.log(
  "Fifth Word: " + exampleFirstWord10 + ", with length: " + fifthWordLength
);
