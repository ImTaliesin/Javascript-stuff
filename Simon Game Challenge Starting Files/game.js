let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let audio = new Audio("sounds/" + name + ".mp3");

gameStart();
function gameStart() {
    $(document).keypress(function() {
    
        nextSequence();
    });
}

 function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("h1").text("Level " + gamePattern.length);
    $("." + randomChosenColor).fadeOut(100).fadeIn(100); //flashes the button
    
    //wait loop for 500ms
setTimeout(() => {
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}, 1000);

    console.log(gamePattern);
}


function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
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
    let userChosenColor = $(this).attr("id"); 
    userPattern.push(userChosenColor);        
    playSound(userChosenColor);              
    animatePress(userChosenColor);
    console.log(userPattern);
    checkAnswer();



    
});

function checkAnswer() {
    if (userPattern == gamePattern) {
        console.log("success");
        nextSequence();

    }
    else {
        console.log("wrong");


    }
}