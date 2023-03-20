//BMI Calculator

const person = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    bmi: function () {
        return (this.mass / this.height ** 2);
    }
};

console.log(person.bmi());