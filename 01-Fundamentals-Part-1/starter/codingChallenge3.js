const avScoreDolphin = (97+112+101) / 3;
const avScoreKoalas = (109+95+106) / 3;

console.log(avScoreDolphin, avScoreKoalas);

if(avScoreDolphin > avScoreKoalas && avScoreDolphin >= 100){
	console.log("Dolphins won with an average score of "+avScoreDolphin+"!");
}else if(avScoreDolphin < avScoreKoalas && avScoreKoalas >= 100){
	console.log("Koalas won with an average score of "+avScoreKoalas+"!");
}else if(avScoreDolphin == avScoreKoalas && avScoreDolphin >= 100 && avScoreKoalas >= 100){
	console.log("It's a tie!");
}else{
	console.log("Neither Dolphins nor Koalas have won!");
}