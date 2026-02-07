// asynchronous - having pause - executing after a stop
// Example - Network calls, reading and writing files, time functions, user inputs and others

console.log("Hello World!");

function sayHello() {
    console.log("I would like to say hello");
}

setTimeout(() => {
    sayHello()
}, 2000)

for (let index = 0; index < 10; index++) {
    console.log(index);
}


