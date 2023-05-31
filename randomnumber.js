var num = 0;
function CoinFlip() {
        num = Math.random()* 100;
        num = Math.floor(num) +1;
    if (num > 50) 
        {console.log("You win");} 
    else 
        {console.log("You lose");}
}
CoinFlip();