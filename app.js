function getComputerChoice(){ 
    const arr = ["Rock", "Paper", "Scissors"] 
    const randNumber = Math.floor((Math.random() * 3)) 
    return arr[randNumber] 
} 
    
    alert(getComputerChoice())