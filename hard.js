///HARD: Given the information below for Tom and Jerry.
///● Tom - height:  9in mass: 8 g
//● Jerry - height: 10in mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)
//Store Tom & Jerry’s mass and height as variables.
///Calculate both their BMI’s. Create a Boolean
//variable containing information about whether Tom has a
///higher BMI than Jerry. Print a string to the
//console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).//
const tomaHieght = 9;
const tomMass = 8;
const jerryHieght = 10;
const JerryMass = 45;

///if (tomBMI<jerryBMI) {
// return tomBMI
///}
//else{
//return jerryBMI
//}
function calcBmi(x, y) {
  bmi = x / (y * y);
  return bmi;
}
let tomBmi = calcBmi(massTom, hieghtTom);
let jerryBmi = calcBmi(massJerry, hieghtTom);
let checker = tomBmi > jerryBmi;
console.log(`Is Tom’s BMI higher than Jerry’s? ${checker}`);
