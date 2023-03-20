//BMI Calculator

//OBJECTS
const person1 = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    bmi: function () {
        return (Math.round(this.mass / this.height ** 2));
    }
};

const person2 = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    bmi: function () {
        return (Math.round(this.mass / this.height ** 2));
    }
};

//VARIABLES
const out = `${person1.name} (${person1.height}m,${person1.mass}kg,BMI of ${person1.bmi()}) has a higher BMI than ${person2.name} (${person2.height}m,${person2.mass}kg,BMI of ${person2.bmi()}): ${person1.bmi() > person2.bmi()}`;

console.log(out);
