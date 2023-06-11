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
    
    alert(playerSelection())