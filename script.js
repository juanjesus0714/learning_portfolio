"use strict";
/*let js = "amazing";
//if (js === "amazing") alert("Javascript is FUN!");
//console.log(40 + 8 + 23 - 10);
let firstName = "Juan";
//console.log(firstName);
let continent = "America";
let country = "Panama";
let population = 5000000;
/*console.log(continent);
console.log(country);
console.log(population);
const isIsland = false;
let language = "Spanish";*/
/*console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);*/
/*let description = country + " is in " + continent + ", and its " + population + " people speak " + language
console.log(description);
console.log(typeof description);*/
/*let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;
console.log(markBmi, johnBmi, markBmi > johnBmi);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBmi = markMass / markHeight ** 2;
johnBmi = johnMass / johnHeight ** 2;
console.log(markBmi, johnBmi, markBmi > johnBmi);

let firstName = "Juan";
let continent = "America";
let country = "Bolivia";
let population = 5000000;
let language = "Spanish";
console.log(
  `${country} is in ${continent}, and its ${population} people speak ${language}.`
);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi}).`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi}).`);
}

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Juan"));
console.log(Boolean({}));*/

/*const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;
const shouldDrive = hasDriversLicense && hasGoodVision;

/*console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}*/

/*const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins === averageScoreKoalas) {
  console.log("Wow, we have a draw!!");
} else if (averageScoreDolphins > averageScoreKoalas) {
  console.log(`Dolphins are the winners by ${averageScoreDolphins} points!!`);
} else {
  console.log(`Koalas are the winners by ${averageScoreKoalas} points!!`);
}*/

/*const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log(`Dolphins are the winners by ${averageScoreDolphins} points!!`);
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log(`Koalas are the winners by ${averageScoreKoalas} points!!`);
}*/

/*const averageScoreDolphins = (97 + 112 + 81) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins >= 100 &&
  averageScoreKoalas >= 100
) {
  console.log("Wow, we have a draw!!");
} else if (
  averageScoreDolphins > averageScoreKoalas &&
  averageScoreDolphins >= 100
) {
  console.log(`Dolphins are the winners by ${averageScoreDolphins} points!!`);
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log(`Koalas are the winners by ${averageScoreKoalas} points!!`);
} else {
  console.log(`No one wins the Trophy`);
}*/

/*const day = "sunday";

switch (day) {
  case "monday":
    console.log("Activity One");
    break;
  case "tuesday":
    console.log("Activity Two");
    break;
  case "wednesday":
    console.log("Activity Three");
    break;
  case "thursday":
    console.log("Activity Four");
    break;
  case "friday":
    console.log("Activity Five");
    break;
  case ("saturday", "sunday"):
    console.log("Enjoy weekend!");
    break;
  default:
    console.log("Invalid Operation.");
    break;
}

if (day === "monday") {
  console.log("Activity One");
} else if (day === "tuesday") {
  console.log("Activity Two");
} else if (day === "wednesday") {
  console.log("Activity Three");
} else if (day === "thursday") {
  console.log("Activity Four");
} else if (day === "friday") {
  console.log("Activity Five");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend!");
} else {
  console.log("Invalid Operation.");
}*/

/*const age = 17;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`);*/

/*const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);*/

/*function logger() {
  console.log("Sample code.");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

//function as declaration
function calcAgeA(birthYear) {
  return 2023 - birthYear;
}

const ageA = calcAgeA(1991);

//function as expression
const calcAgeB = function (birthYear) {
  return 2023 - birthYear;
};

const ageB = calcAgeB(2016);

console.log(ageA, ageB)*/

//Arrow function
const calcAgeC = (birthYear) => 2024 - birthYear;

const ageC = calcAgeC(1991);
console.log(ageC);

const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = 2024 - birthYear;
  const retirement = 65 - currentAge;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Juan"));
console.log(yearsUntilRetirement(2002, "George"));

const friend1 = "Michael";
const friend2 = "George";
const friend3 = "Louis";

const friends = [friend1, friend2, friend3];
console.log(friends);

const friends2 = new Array(friend1, friend2, friend3);
console.log(friends2[0]);
console.log(friends2[2]);

const calcAgeAD = function (birthYear) {
  return 2024 - birthYear;
};

const yearsArray = [1991, 1967, 2002, 2010, 2016];

console.log(calcAgeAD(yearsArray[yearsArray.length - 1]));
