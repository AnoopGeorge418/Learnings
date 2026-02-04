// 1st challenge

let teaFlavour = [ "green tea", "black tea", "oolong tea" ]
let firstTea = teaFlavour[0]
// console.log(firstTea);

// 2nd challenge

let cities = [ "London", "Tokyo", "Paris", "New York" ]
let favoriteCity = cities[2]
// console.log(favoriteCity);

// 3rd Challenge

let teaTypes = [ "herbal tea", "white tea", "masala chai" ]
teaTypes[1] = 'jasmine tea'
// console.log(teaTypes);

// 4th Challenge

let citiesVisited = [ "Mumbai", "Sydney" ]
citiesVisited.push('Berlin')
// console.log(citiesVisited);

// 5th Challenge

let teaOrders = [ "chai", "iced tea", "matcha", "earl grey" ]
let lastOrder = teaOrders.pop()
// console.log(teaOrders);
// console.log(lastOrder);

// 6th Challenge - softcopy - copies the array and refernce the same array in memory - not a new one - so if we deleted in original it will get effectd in copy.

let popularTeas = [ "green tea", "oolong tea", "chai" ]
let softCopyTeas = popularTeas
// console.log(popularTeas);
// console.log(softCopyTeas);
// popularTeas.pop()
// console.log (popularTeas);
// console.log (softCopyTeas);

// 7th Challenge -- hardcopies - using spread operator

let topCities = [ "Berlin", "Singapore", "New York" ]
let hardCopyCities = [...topCities] // -- Way 1
// let hardCopyCities = topCities.slice() // -- Way 2
// topCities.pop()
// console.log(topCities);
// console.log(hardCopyCities);

// 8th Challenge

let europeanCities = [ "Paris", "Rome" ]
let asianCities = [ "Tokyo", "Bangkok" ]

let worldCities = europeanCities.concat(asianCities)
// console.log(worldCities);

// 9th Challenge

let teaMenu = [ "masala chai", "oolong tea", "green tea", "earl grey" ]
let menuLength = teaMenu.length
// console.log(menuLength);

// 10th Challenge

let cityBucketList = [ "Kyoto", "London", "Cape Town", "Vancouver" ]

let isLondonInList = cityBucketList.includes('London')
console.log(isLondonInList);

