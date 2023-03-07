let avgDolphins;
let avgKoalas;
let outputString;

calcAverage = (_score1,_score2,_score3) => (_score1+_score2+_score3) / 3;

avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);

function checkWinner(avgDolphins, avgKoalas){
	if(avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2){
		outputString = `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
	}else if(avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2){
		outputString = `Koalas win (${avgKoalas} vs ${avgDolphins})`;
	}else{
		outputString =`No one wins. (${avgKoalas} vs ${avgDolphins})`;
	}
}
checkWinner(avgDolphins, avgKoalas);
console.log(outputString);

//Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 -> No one wins
//Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 -> Dolphins win