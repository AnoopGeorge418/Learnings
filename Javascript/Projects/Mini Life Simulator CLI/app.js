import readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process';
import { ageCalc } from './ageCalc.js'
import { budgetCalc } from './budgetCalc.js'
import { quizGame } from './quiz.js'
import { randomNumberGuessing } from './randomNumberGuessing.js'
import { decisionGame } from './decisionGame.js'

import { miniAi } from './minAi.js'
import { analytics } from './analytics.js'
import { exitFromApp } from './exit.js'
const mainApp = async () => {
    console.log("Welcome to Mini Life Simulator CLI...");

    // Starting readline
    const readines = readline.createInterface({ input, output })

    while ( true ) {
        const userChoosableItems = {
            1: "Age Calculator",
            2: "Budget Calculator",
            3: "Simple Quiz Game",
            4: "Random Number Guessing",
            5: "Simple Decision Game",
            6: "Mini Ai",
            7: "Show Analytics",
            8: "Exit App"
        }
    
        for (let [ key, value ] of Object.entries(userChoosableItems)) {
            console.log(key, value);
        }
        console.log('\n');
    
        // User input
        const userChoice = Number(await readines.question("Please make your selection from above!: "))

        if ( !(userChoice in userChoosableItems) ) {
            console.log("Please make a valid selection.");
            console.log('\n');
            
            continue;
        }
    
        if ( userChoice === 1 ) ageCalc()
        else if ( userChoice === 2 ) budgetCalc()
        else if ( userChoice === 3 ) quizGame()
        else if ( userChoice === 4 ) randomNumberGuessing()
        else if ( userChoice === 5 ) decisionGame()
        else if ( userChoice === 6 ) miniAi()
        else if ( userChoice === 7  ) analytics()
        else if ( userChoice === 8 ) {
            exitFromApp()
            readines.close()
            break
        }
        
    }

}

// Starting project
mainApp()
