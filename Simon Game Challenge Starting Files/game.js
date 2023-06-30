let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];

let gamePatternTest = ["red", "blue", "green", "yellow"];
let userPatternTest = ["red", "blue", "green", "yellow"];



function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}



function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function() {
        $("." + currentColor).removeClass("pressed");
    }
    , 100);
}


$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
}
);

