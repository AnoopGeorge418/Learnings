const person = {
    name: "Anoop",
    greet() {
        console.log(`Hi, Iam ${this.name}`);
    }
}

person.greet()

const greetFunction = person.greet
greetFunction()
const boundGreet = person.greet.bind({ name: "George" })
boundGreet()

// bind, call, apply
