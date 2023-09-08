document.addEventListener('DOMContentLoaded', function() {

    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = '';
    
    const catjumpscare = document.querySelector('.jumpscare');
    let audio = new Audio("vineboom.mp3");

    const playerRock = document.querySelector('.rock');
    const playerPaper = document.querySelector('.paper');
    const playerScissors = document.querySelector('.scissors');
    const rps = ['rock', 'paper', 'scissors'];

    playerRock.addEventListener('click', () => {
        playerChoice = 'rock';
        playRound(playerChoice);
    });

    playerPaper.addEventListener('click', () => {
        playerChoice = 'paper';
        playRound(playerChoice);
    });

    playerScissors.addEventListener('click', () => {
        playerChoice = 'scissors';
        playRound(playerChoice);
    });

    function checkWin(computer_choice, player_choice) {
        if (
            (computer_choice == rps[0] && player_choice == rps[1]) ||
            (computer_choice == rps[1] && player_choice == rps[2]) ||
            (computer_choice == rps[2] && player_choice == rps[0])
        )
            return 2;
        else if (computer_choice == player_choice) return 1;
        return 0;
    }

    function declareWinner(result, computerChoice) {
        const playerScoreDisplay = document.getElementById('pScore');
        const computerScoreDisplay = document.getElementById('cScore');
        const gameResultDisplay = document.getElementById('fResult');

        if (result == 2)
        {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            gameResultDisplay.innerHTML = 
                'You lost! Computer has chosen: <span class="computer-choice">' + computerChoice + '</span>';
            console.log('You won! Computer has chosen: ' + computerChoice);
        }
        else if (result == 1) 
             {
                gameResultDisplay.textContent = 'DRAW';
                catjumpscare.setAttribute("style","display: block;");
                audio.play();
                 console.log('DRAW');

                 setTimeout(function () {
                    catjumpscare.setAttribute("style", "display: none;");
                }, 1000);
             }
        else {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            gameResultDisplay.innerHTML = 
                'You lost! Computer has chosen: <span class="computer-choice">' + computerChoice + '</span>';
            console.log('You lost! Computer has chosen: ' + computerChoice);
             }

        if(playerScore == 5)
        {
            gameResultDisplay.textContent = 'You Won (best of 5)!';
            playerScore = 0;
            playerScoreDisplay.textContent = playerScore;
            computerScore = 0;
            computerScoreDisplay.textContent = computerScore;
        }
        else if(computerScore == 5)
        {
            gameResultDisplay.textContent = 'You lost (best of 5)!';
            playerScore = 0;
            playerScoreDisplay.textContent = playerScore;
            computerScore = 0;
            computerScoreDisplay.textContent = computerScore;
        }
    }

    function playRound(playerChoice) {
        const computerChoice = rps[Math.floor(Math.random() * 3)];
        let result = checkWin(computerChoice, playerChoice);
        declareWinner(result, computerChoice);
    }
});