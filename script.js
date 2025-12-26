let wins = 0;
let losses = 0;

function higherDice(){
    const diceResult = document.getElementById("dice-result");
    const diceImages = document.getElementById("dice-images");
    const gameResult = document.getElementById("game-result");
    const images = [];
    const values = [];
    

    for(let i = 0; i < 2; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`)
    }
  
    let sum = values[0] + values[1];
    diceResult.textContent = `Dice Total: ${sum}`;
    diceImages.innerHTML = images.join('');

    if(sum <= 6){
        gameResult.innerHTML = "You Lose!, Better Luck next time";
        losses++;
        lossLabel.textContent = losses;
    } else if( sum == 7){
        gameResult.innerHTML = "Nooone wins, it is a tie!";
    }
    else{
        gameResult.innerHTML ="You Win, Well Done!";
        wins++;
        winLabel.textContent = wins;
    }
 
}

function lowerDice(){
    const diceResult = document.getElementById("dice-result");
    const diceImages = document.getElementById("dice-images");
    const gameResult = document.getElementById("game-result");
    const images = [];
    const values = [];


    for(let i = 0; i < 2; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`)
    }
  
    let sum = values[0] + values[1];
    diceResult.textContent = `Dice Total: ${sum}`;
    diceImages.innerHTML = images.join('');

     if(sum > 6){
        gameResult.innerHTML = "You Lose!, Better Luck next time";
        losses++;
        lossLabel.textContent = losses;
    } else if( sum == 7){
        gameResult.innerHTML = "Nooone wins, it is a tie!";
    }
    else{
        gameResult.innerHTML ="You Win, Well Done!";
        wins++;
        winLabel.textContent = wins;
    }
   
}