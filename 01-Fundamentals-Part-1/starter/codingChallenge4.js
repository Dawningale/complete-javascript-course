/**
 * @author  Florian Banasiak
 * - Tip calculator
 * - Bill between 50 and 300 -> 15%; otherwise 20%
 * - bill values are 275, 40, 430
 */

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
const outputString = `The bill was ${bill}, the tip ${tip}, and the total value to pay is ${total}`;

console.log(outputString);
//The bill was 275, the tip was 41.25, and the total value 316.25
//The bill was 40, the tip was 8, and the total value 48
//The bill was 430, the tip was 86, and the total value 516