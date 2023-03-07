const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
const outputString = `The bill was ${bill}, the tip ${tip}, and the total value to pay is ${total}`;

console.log(outputString);