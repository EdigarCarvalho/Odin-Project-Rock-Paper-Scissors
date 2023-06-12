function getComputerChoice(){ 
    const arr = ["Rock", "Paper", "Scissors"] 
    const randNumber = Math.floor((Math.random() * 3)) 
    return arr[randNumber] 
} 

function playerSelection(){
    const arr = ["Rock", "Paper", "Scissors"] 
    let answerNumber;

    while(true){
        answerNumber = parseInt(prompt("Choose: \n[1] Rock \n[2] Paper \n[3] Scissors"))
        if(answerNumber >= 1 && answerNumber <= 3)
            break
    }
    return arr[answerNumber - 1]
}

function playRound( computerChoice , userChoice){
    if( userChoice === "Rock" ){

        switch(computerChoice){
            case "Rock":
                alert("Draw! Both choose Rock")
                return 0
            case "Paper":
                alert("You Lose! Paper beats Rock")
                return -1
            case "Scissors":
                alert("You Win! Rock beats Scissors")
                return 1
        }

    }else if( userChoice === "Paper" ){

        switch(computerChoice){
            case "Rock":
                alert("You Win! Paper beats Rock")
                return 1
            case "Paper":
                alert("Draw! Both choose Paper")
                return 0
            case "Scissors":
                alert("You Lose! Scissors beats Paper")
                return -1
        }

    }else{

        switch(computerChoice){
            case "Rock":
                alert("You Lose! Rock beats Scissors")
                return -1
            case "Paper":
                alert("You Win! Scissors beats Paper")
                return 1
            case "Scissors":
                alert("Draw! Both choose Scissors")
                return 0
        }

    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let roundPoint = 0;

    while(userScore < 5 && computerScore < 5){
        roundPoint = playRound( getComputerChoice() , playerSelection() )
        if( roundPoint === -1)
            computerScore++
        else
            userScore += roundPoint

        alert(`The current score:\n User:${userScore}\nComputer:${computerScore}`)
    }

    if(userScore === 5)
        alert("Congrats!!! You Win :)")
    else
        alert("You Lose :( \nTry again!!")
}

game()

 