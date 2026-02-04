// 1st Challenge

// let sum = 0
// let i = 1

// while ( i <= 5 ) {
//     sum += i
//     i++
// }

// console.log(sum);

// 2nd Challenge

// let countdown = []
// let j  = 5

// while ( j != 0 ) {
//     countdown.push(j)
//     j--
// }

// console.log(countdown);


// 3rd Challenge

// let teaCollection = []
// let tea

// do {
//     tea = prompt(`Enter your ffavourite tea (type "stop" to finish): `)

//     if ( tea != 'stop' ) {
//         teaCollection.push(tea)
//     }

// } while (tea != 'stop');

// 4th Challenge

// let total = 0
// let i = 1

// do {
//     total += 3
//     i++
// } while (i <= 3);

// console.log(total);

// 5th challenge

// let multipliedNumbers = []
// let numbers = [ 2, 4, 6 ]

// for (let i = 0; i < numbers.length; i++) {
//     multipliedNumbers.push(numbers[i] * 2)
// }

// console.log(multipliedNumbers);

// 6th Challenge

// let cities = [ "Paris", "New York", "Tokyo", "London" ]
// let cityList = []

// for (let i = 0; i < cities.length; i++) {
//     cityList.push(cities[i])
// }

// console.log(cityList);

// ---------------------------------------------------------------------------------------

// 7th challenge

// let teas = [ "green tea", "black tea", "chai", "oolong tea" ]
// let selectedTeas = []

// for ( i = 0; i < teas.length; i++ ) {
//     if ( teas[i] === 'chai' ) {
//         break
//     } 
//     selectedTeas.push (teas[i]);
// }

// console.log(selectedTeas);

// 8th Challenge

// let cities = [ "London", "New York", "Paris", "Berlin" ]
// let visitedCities = []

// for ( i = 0; i < cities.length; i++ ) {
//     if ( cities[i] === 'Paris' ) {
//         continue
//     }
//     visitedCities.push(cities[i])
// }

// console.log(visitedCities);

// 9th Challenge

// let numbers = [ 1, 2, 3, 4, 5 ]
// let smallNumbers = []

// for (const i of numbers) {
//     if ( i === 4 ) {
//         break
//     }
//     smallNumbers.push(i)
// }

// console.log(smallNumbers);

// 10th Challenge

// let teas = [ "chai", "green tea", "herbal tea", "black tea" ]
// let preferredTeas = []

// for (const tea of teas) {
//     if ( tea === 'herbal tea' ) {
//         continue
//     }
//     preferredTeas.push(tea)
// }

// console.log(preferredTeas);

// 11th Chalenge

// let Populations = {
//     "London": 8900000,
//     "New York": 8400000,
//     "Paris": 2200000,
//     "Berlin": 3500000
// }

// let cityPopulations = {}

// for (const city in Populations) {
//     if (city === 'Berlin') {
//         break
//     }    
//     cityPopulations[city] = Populations[city]    
// }

// console.log(cityPopulations);

// 12th Challenge
// let teas = [ "earl green", "green tea", "chai", "oolong tea" ]
// let availableTeas = []

// teas.forEach(tea => {
//     if ( tea === 'chai' ) {
//         return
//     }
//     availableTeas.push(tea)
    
// });

// console.log(availableTeas);

// 13th Challenge
// let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"]
// let traveledCities = []

// worldCities.forEach(city => {
//     if (city === 'Sydney') {
//         return
//     }
//     traveledCities.push(city)
// });

// console.log(traveledCities);

// 14th Challenge
// let numbers = [2, 5, 7, 9]
// let doubledNumbe = []

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 7) {
//         continue
//     }
//     doubledNumbe.push(numbers[i]*2)
// }

// console.log(doubledNumbe);

// 15th Challenge
let teas = [ "chai", "green tea", "black tea", "jasmine tea", "herbal tea" ]
let shortTeas = []

for (const tea of teas) {
    if (tea.length > 10) {
        break
    }
    shortTeas.push(tea)
}

console.log(shortTeas);
