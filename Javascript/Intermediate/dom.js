// DOM(Document Object Model) - Used to manupilate entire website however i like

// Example 1
document.getElementById("changeTextButton").addEventListener('click', () => {
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "The Paragraph is changed"

})

// Example 2
document.getElementById("highlightFirstCity").addEventListener("click", () => {
    let lists = document.getElementById("citiesList")
    lists.firstElementChild.classList.add('highlight')
})

// Example 3
document.getElementById('changeOrder').addEventListener('click', () => {
    let cofeeType = document.getElementById('coffeeType')
    cofeeType.textContent = 'Espresso'
    cofeeType.style.backgroundColor = "brown"
})

// Example 4
document.getElementById("addNewItem").addEventListener("click", () => {
    let newItem = document.createElement('li')
    newItem.textContent = 'Eggs' 
    document.getElementById("shoppingList").appendChild(newItem)
})

// 5th Challenge
document.getElementById("removeLastTask"),addEventListener('click', () => {
    let taskList = document.getElementById('taskList')
    taskList.lastElementChild.remove()
})

// Example 6
document.getElementById('clickMeButton').addEventListener('click', () => {
    alert("I am Anoop")
})

// Example 6
document.getElementById("teaList").addEventListener('click', (event) => {
    if ( event.target && event.target.matches(".teaItem") ) {
        alert("You selected: " + event.target.textContent)
    }
})



