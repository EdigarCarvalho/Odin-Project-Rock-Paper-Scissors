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
                return "Draw! Both choose Rock"
            case "Paper":
                return "You Lose! Paper beats Rock"
            case "Scissors":
                return "You Win! Rock beats Scissors"
        }

    }else if( userChoice === "Paper" ){

        switch(computerChoice){
            case "Rock":
                return "You Win! Paper beats Rock"
            case "Paper":
                return "Draw! Both choose Paper"
            case "Scissors":
                return "You Lose! Scissors beats Paper"
        }

    }else{

        switch(computerChoice){
            case "Rock":
                return "You Lose! Rock beats Scissors"
            case "Paper":
                return "You Win! Scissors beats Paper"
            case "Scissors":
                return "Draw! Both choose Scissors"
        }

    }
}
    
alert(playRound(getComputerChoice() , playerSelection()))