// new keyword - created objects

function Person( name, age ) {
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

// let myCar = new Car("Toyoto", "Camry")
// console.log(myCar);

// let myNewCar = new Car ('Tata', 'Safari');
// console.log (myNewCar);

function Tea(type) {
    this.type = type
    this.describe = function() {
        return `this is a cup of ${this.type}`
    }
}

// let greenTea = new Tea ('Green Tea');
// console.log (greenTea);
// console.log (greenTea.describe());

function Animal(species) {
    this.species = species
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
console.log(dog.sound());

let cat = new Animal ('Cat');
console.log (cat.sound ());
