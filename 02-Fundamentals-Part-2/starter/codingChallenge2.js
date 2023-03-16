const bill = [125, 555, 44];
let tmp;
let tip = new Array();
const total = new Array();
//tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//const total = bill + tip;
//const outputString = `The bill was ${bill}, the tip ${tip}, and the total value to pay is ${total}`;
//console.log(outputString);

for (i = 0; i < bill.length; i++) {
    tmp = calcTip(bill[i]);
    //tip.push(tmp);
    tip[i] = tmp;
    console.log(tmp);
    console.log(tip.length);
    console.log("tip is " + tip[i]);

}

function calcTip(bill) {
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    return tip;
}

for (i = 0; i < total.length; i++) {
    total[i] = bill[i] + tip[i];
}


for (i = 0; i < total.length; i++) {
    console.log(total[i]);
}