/**
 * Non Primative Datatypes -- can store multiple values
 * Objects - larger space will be reserved in the memory
 * Array
 * Functions
 * Classes
 */

// Even if the object is constant - the value of it can be changed because those are primatives

let username = {
    firstname: "anoop",
    isLoggedIn: true,
};

const newuser = {
  firstname: 'george',
  isLoggedIn: true,
};

// console.log(newuser);

newuser.firstname = "Anoop"

// Adding new data to object 
newuser.lastname = "George" // 1st way

// console.log(newuser);
// console.log( username['firstname']); // 2nd way

// Date
let today = new Date()
// console.log(today.getDate());

// Array
let pirates = ['Luffy', 'Zoro', 'Sanji', 'Ussop', 'Nami']
// console.log(pirates[0]);

// Type Conversion
let value = "2"
console.log(Number(value));

