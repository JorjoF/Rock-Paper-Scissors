const button = document.getElementById('button');
const computer = computerPlay();
var num = 0;
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
            break;
        case 1:
            return "r";
            break;
        case 2:
            return "s";
            break;
    }
}

function playRound(player, computer, outcomes){
    var play = player + computer;
    for(var k in outcomes){
        var v = outcomes[play];
        switch(v){
            case 1:
                return "Tie";
                break;
            case 2:
                return "Tie";
                break;
            case 3:
                return "Tie";
                break;
            case 4:
                return "Computer Wins!!!!";
                break;
            case 5:
                return "Computer Wins!!!!";
                break;
            case 6:
                return "Computer Wins!!!!";
                break;
            case 7:
                return "Player Wins!!!!";
                break;
            case 8:
                return "Player Wins!!!!";
                break;
            case 9:
                return "Player Wins!!!!";
                break;
        }
    }
}

button.addEventListener('click', () => {
    const computer = computerPlay();
    const player = document.getElementById("player").value.charAt(0).toLowerCase();
    document.getElementById('computer').innerHTML = computer;
    document.getElementById('outcome').innerHTML = playRound(player, computer, gameOutcomes);
    
});