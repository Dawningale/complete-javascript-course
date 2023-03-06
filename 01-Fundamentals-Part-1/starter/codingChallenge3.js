const avScoreDolphin = (97 + 112 + 101) / 3;
const avScoreKoalas = (109 + 95 + 106) / 3;
let decision;

if (avScoreDolphin > avScoreKoalas && avScoreDolphin >= 100) {
	decision = `Dolphins won with an average score of $(avScoreDolphin)!`;
} else if (avScoreDolphin < avScoreKoalas && avScoreKoalas >= 100) {
	decision = `Koalas won with an average score of $(avScoreKoalas)!`;
} else if (avScoreDolphin == avScoreKoalas && avScoreDolphin >= 100 && avScoreKoalas >= 100) {
	decision = `It's a tie!`;
} else {
	decision = `Neither Dolphins nor Koalas have won!`;
}

console.log(decision);