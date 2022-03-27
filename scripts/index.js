const rButton = document.getElementById('Rock');
const pButton = document.getElementById('Paper');
const sButton = document.getElementById('Scissors');
const roundWinner = document.querySelector("#roundWinner");
const closeModal = document.querySelector("#close-button");

const rock = "✊";
const paper = "✋";
const scissors = "✌";

let playerScore = 0;
let computerScore = 0;

const gameOutcomes = {
    "rr" : 1,
    "pp" : 2,
    "ss" : 3,
    "rp" : 4,
    "ps" : 5,
    "sr" : 6,
    "rs" : 7,
    "pr" : 8,
    "sp" : 9
};


function computerPlay() {
    var ran = Math.floor(Math.random() * 3);
    switch(ran){
        case 0:
            return "p";
        case 1:
            return "r";
        case 2:
            return "s";
    }
}

function playRound(player, computer, outcomes){
    var play = player + computer;
    for(var k in outcomes){
        var v = outcomes[play];
        switch(v){
            case 1: case 2: case 3:
                return "Tie";
            case 4: case 5: case 6:
                computerScore++;
                document.querySelector("#computerScore").innerHTML = computerScore;
                console.log(computerScore)
                return "Computer Wins!!!!";
            case 7: case 8: case 9:
                playerScore++;
                document.querySelector("#playerScore").innerHTML = playerScore;
                console.log(playerScore)
                return "Player Wins!!!!";
                
        }
    }
}

function computerToEmoji(computer){
    switch(computer){
        case "r":
            return rock;
            break;
        case "p":
            return paper;
            break;
        case "s":
            return scissors;
            break;
    }
}

rButton.addEventListener('click', () => {
    const computer = computerPlay()
    document.getElementById('outcome').innerHTML = playRound("r", computer, gameOutcomes);
    document.getElementById('player').innerHTML = rock
    document.getElementById('computer').innerHTML = computerToEmoji(computer)
    roundWinner.showModal();

})
pButton.addEventListener('click', () => {
    const computer = computerPlay()
    document.getElementById('outcome').innerHTML = playRound("p", computer, gameOutcomes);
    document.getElementById('player').innerHTML = paper
    document.getElementById('computer').innerHTML = computerToEmoji(computer)
    roundWinner.showModal();
})
sButton.addEventListener('click', () => {
    const computer = computerPlay()
    document.getElementById('outcome').innerHTML = playRound("s", computer, gameOutcomes);
    document.getElementById('player').innerHTML = scissors
    document.getElementById('computer').innerHTML = computerToEmoji(computer)
    roundWinner.showModal();

})
closeModal.addEventListener('click', () => {
    roundWinner.close();
})
