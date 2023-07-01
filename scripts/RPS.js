function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    let s_choice = "";

    switch (choice) {
        case 1:
            s_choice = "Rock";
        break;
        case 2:
            s_choice = "Paper";
        break;
        case 3:
            s_choice = "Scissors";
        break;
    }

    return s_choice;
}

function capitalize(str) {
    if (typeof(str) == "string") {
        str = str.toLowerCase();
        let str1 = str.charAt(0).toUpperCase();
        let str2 = str.slice(1);

        return str1 + str2;
    } else {
        return null;
    }
}

function RockPaperScissors(playerChoice, computerChoice) {
    let result = "";

    switch (playerChoice) {
        case "Rock":
            switch (computerChoice) {
                    case "Rock":
                        result = result.concat("Draw! ", playerChoice, " vs ", computerChoice);
                    break;
                    case "Paper":
                        result = result.concat("You Lose! ", computerChoice, " beats ", playerChoice);
                    break;
                    case "Scissors":
                        result = result.concat("You Win! ", playerChoice, " beats ", computerChoice);
                    break;
                }
        break;
        case "Paper":
            switch (computerChoice) {
                    case "Rock":
                        result = result.concat("You Win! ", playerChoice, " beats ", computerChoice);
                    break;
                    case "Paper":
                        result = result.concat("Draw! ", playerChoice, " vs ", computerChoice);
                    break;
                    case "Scissors":
                        result = result.concat("You Lose! ", computerChoice, " beats ", playerChoice);
                    break;
                }
        break;
        case "Scissors":
            switch (computerChoice) {
                    case "Rock":
                        result = result.concat("You Lose! ", computerChoice, " beats ", playerChoice);
                    break;
                    case "Paper":
                        result = result.concat("You Win! ", playerChoice, " beats ", computerChoice);
                    break;
                    case "Scissors":
                        result = result.concat("Draw! ", playerChoice, " vs ", computerChoice);
                    break;
                }
        break;
        default:
            result = result.concat("Invalid input!");
        break;
    }

    return result;
}

const main_header = document.querySelector(".main_header");
main_header.textContent = "Rock Paper Scissors";

const button_div = document.querySelector(".action_buttons");
const buttons = button_div.querySelectorAll("button");


buttons[0].textContent = "Rock";
buttons[1].textContent = "Paper";
buttons[2].textContent = "Scissors";

const player_score = document.querySelector("#playerScore");
const comp_score = document.querySelector("#compScore");

const messageBar = document.querySelector("#messageBar");

let pscore = 0;
let cpscore = 0;

function counter(player_choice) {
    messageBar.textContent = RockPaperScissors(player_choice, getComputerChoice());

    if (messageBar.textContent.search("Draw") != -1) {
        messageBar.style.color = "whitesmoke";
    }else if(messageBar.textContent.search("Win") != -1) {
        messageBar.style.color = "green";
        pscore += 1;
        player_score.textContent = pscore.toString();
        result()
    } else if (messageBar.textContent.search("Lose") != 1) {
        messageBar.style.color = "red";
        cpscore += 1;
        comp_score.textContent = cpscore.toString();
        result()
    } else {
        return "ERROR";
    }
}

buttons[0].addEventListener('click', () => {
    counter("Rock");
});
buttons[1].addEventListener('click', () => {
    counter("Paper");
});buttons[2].addEventListener('click', () => {
    counter("Scissors");
});

const winner = document.querySelector("#winner");

function result() {
    if (pscore > 4) {
        winner.textContent = "The winner is the player!"
        player_score.style.color = "green";
        comp_score.style.color = "red";
    } else if (cpscore > 4) {
        winner.textContent = "The winner is the computer!"
        player_score.style.color = "red";
        comp_score.style.color = "green";
    }
    if(!!winner.textContent){
        retry_btn.textContent = "retry";
        button_div.appendChild(retry_btn);
    }
}

const retry_btn = document.createElement('button');

retry_btn.addEventListener('click', () => {
    pscore = 0;
    cpscore = 0;
    comp_score.textContent = cpscore.toString();
    player_score.textContent = pscore.toString();
    comp_score.style.color = "whitesmoke";
    player_score.style.color = "whitesmoke";
    winner.textContent = "";
    messageBar.textContent = "";
    button_div.removeChild(retry_btn);
});
