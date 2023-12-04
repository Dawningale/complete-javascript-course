const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
//Ouptut -> true
//if one or both are changed to false, the entire thing will be false

console.log(hasDriversLicense || hasGoodVision);
//Output -> true
//Only false if both are false

console.log(!hasDriversLicense && hasGoodVision);
//! -> Negate

const shouldDrive = hasDriversLicense && hasGoodVision;

/*if (shouldDrive) {
    console.log("Sarah is able to drive");
} else {
    console.log("Sarah cannot drive.");
}*/

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Sarah cannot drive.");
}

