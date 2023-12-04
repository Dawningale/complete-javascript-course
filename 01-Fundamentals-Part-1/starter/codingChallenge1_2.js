//BMI Calculator

const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.95;

const bmiOfMark = massOfMark / heightOfMark ** 2;
//Also possible: bmiOfMark = massOfMark / (heightOfMark * heightOfMark);
const bmiOfJohn = massOfJohn / heightOfJohn ** 2;

const markHigherBMI = bmiOfMark > bmiOfJohn;
/*
Also possible:
if(bmiOfMark > bmiOfJohn){
	markHigherBMI = true;
}
*/
//const consoleOutput = "Marks BMI (" + Math.round(bmiOfMark) + ") is higher than Johns (" + Math.round(bmiOfJohn) + "): " + markHigherBMI;
//console.log(consoleOutput);
/*
console.log("Marks BMI of "+bmiOfMark+" is higher than Johns "+bmiOfJohn+": "+markHigherBMI);
*/
const consoleOutput = ``;

if (markHigherBMI) {
	consoleOutput = `Mark's BMI ${bmiOfMark} is higher than John's (${bmiOfJohn})!`;
} else {
	consoleOutput = `John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark})!`;

}
