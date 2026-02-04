// function makeTea ( typeOfTea ) {
//     return `Making ${typeOfTea}`
// }

// let teaOrder = makeTea("Green Tea")
// console.log(teaOrder);


// function orderTea ( teaType ) {
//     function confirmedOrder () {
//         return `Order confirmed for ${teaType}`
//     }
//     return confirmedOrder()
// }

// let tea = orderTea("Green Tea")
// console.log(tea);


// const calculateTotal = ( price, quantity ) => {
//     return price * quantity
// }

// let totalCost = calculateTotal(10, 5)
// console.log(totalCost);

// function makeTea (typeOfTea) {
//     return `maketea: ${typeOfTea}`
// }

// function processTeaOrder ( teaFunction ) {
//     return teaFunction("earl grey")
// }

// let order = processTeaOrder(makeTea)
// console.log(order);


function createTeaMaker () {
    return function (teaType) {
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker()
let result = teaMaker("Green Tea")
console.log(result);

