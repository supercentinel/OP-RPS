function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3)
    let s_choice = ""

    switch (choice) {
        case 1:
            s_choice = "Rock"
        break;
        case 2:
            s_choice = "Paper"
        break;
        case 3:
            s_choice = "Scissors"
        break;
    }

    return s_choice
}

function capitalize(str) {
    if (typeof(str) == "string") {
        str = str.toLowerCase()
        let str1 = str.charAt(0).toUpperCase()
        let str2 = str.slice(1)

        return str1 + str2
    } else {
        return null
    }
}

function RockPaperScissors(playerChoice, computerChoice) {
    let result = ""

    switch (playerChoice) {
        case "Rock":
            switch (computerChoice) {
                    case "Rock":
                        result = result.concat("Draw! ", playerChoice, " vs ", computerChoice)
                    break;
                    case "Paper":
                        result = result.concat("You Lose! ", computerChoice, " beats ", playerChoice)
                    break;
                    case "Scissors":
                        result = result.concat("You Win! ", playerChoice, " beats ", computerChoice)
                    break;
                }
        break;
        case "Paper":
            switch (computerChoice) {
                    case "Rock":
                        result = result.concat("You Win! ", playerChoice, " beats ", computerChoice)
                    break;
                    case "Paper":
                        result = result.concat("Draw! ", playerChoice, " vs ", computerChoice)
                    break;
                    case "Scissors":
                        result = result.concat("You Lose! ", computerChoice, " beats ", playerChoice)
                    break;
                }
        break;
        case "Scissors":
            switch (computerChoice) {
                    case "Rock":
                        result = result.concat("You Lose! ", computerChoice, " beats ", playerChoice)
                    break;
                    case "Paper":
                        result = result.concat("You Win! ", playerChoice, " beats ", computerChoice)
                    break;
                    case "Scissors":
                        result = result.concat("Draw! ", playerChoice, " vs ", computerChoice)
                    break;
                }
        break;
        default:
            result = result.concat("Invalid input!")
        break;
    }

    return result
}

function game(rounds) {
    let playerw = 0
    let compw = 0

    for(let i = 0; i < rounds; i++) {
        let playerChoice = prompt("Choose!")
        result = RockPaperScissors(playerChoice, getComputerChoice())
        console.log(result)

        if (result.search("Win") != -1) {
            playerw += 1
        } else if (result.search("Lose")) {
            compw += 1
        }
    }

    if (playerw > compw) {
        console.log("You won the game!")
    } else if (playerw < compw) {
        console.log("You lose the game!")
    } else {
        console.log("Draw game!")
    }

    console.log("comp: ", compw, " player: ", playerw)
}

game(5)
