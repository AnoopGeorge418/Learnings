// OOP - used to create objects and class
// Encapsulation - Restriction direct access to a variable outside a scope - using # - #balance (private)
// Inheritance - Inheritting properties of other 
// Polymorphism - ability to display everything more than 1 form.
// Abstraction - Hides the complex implementation - normal functions
// Static 
// getter - _uses under score and "get uses" - use the same name to access
// setter - set uses

let car = {
    make: "Toyoto",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    },
}
// console.log(car.start());

function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person("John", 20)
// console.log(john.name);

// 