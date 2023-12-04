const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
let decision;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
	decision = `Dolphins won with an average score of $(scoreDolphins)!`;
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
	decision = `Koalas won with an average score of $(scoreKoalas)!`;
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
	decision = `It's a tie!`;
} else {
	decision = `Neither Dolphins nor Koalas have won!`;
}

console.log(decision);