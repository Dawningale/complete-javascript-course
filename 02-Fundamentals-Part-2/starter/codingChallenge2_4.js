const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];
const avg = [];
let singleTip;
let sum = 0;

for (i = 0; i < bill.length; i++) {
    tip[i] = calcTip(bill[i]);
    total[i] = bill[i] + tip[i];

    if (i == bill.length - 1) {
        console.log(`Bill to pay: ${bill}`);
        console.log(`Tip to pay: ${tip}`);
        console.log(`Total price to pay: ${total}`);
    }
}

function calcTip(bill) {
    singleTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    return singleTip;
}

function calcAvg(avg) {
    for (i = 0; i < total.length; i++) {

    }
}