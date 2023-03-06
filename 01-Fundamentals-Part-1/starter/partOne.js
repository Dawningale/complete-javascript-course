//Variables
let population = 84270625;

//CONSTANTS
const COUNTRY = "Germany";
const CONTINENT = "Europe";
const LANGUAGE = "German";
const IS_ILAND = false;
const description = `${COUNTRY} is a country in ${CONTINENT}. Its ${population} citizens speak ${LANGUAGE}.
${COUNTRY} has ${population - 6000000} more people than Finland`;
/*
Country, continent, language and is_island are constants because they won't change in unforeseen future or perhaps never.

However, the population of a country is alsways changing.
*/



//CONSOLE OUTPUT

console.log(description);

/*
console.log("Country name: "+COUNTRY);
console.log("Continent name: "+CONTINENT);
console.log("Language: "+ LANGUAGE);
console.log("Is an island: "+ IS_ILAND);
console.log("Population: "+population);
console.log("The population devided by 2 is: "+(population/2));
console.log("New citizen has been born. New population: "+(population+1));
console.log("Germany has "+ (population-6000000)+" citizens more than Finland which only has 6 Million");
console.log("Germany is in Europe, and its 84 Million people speak german.");
*/
