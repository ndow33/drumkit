
var drums = document.querySelectorAll(".drum")


for (var i = 0; i<drums.length; i++){
    drums[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;

        makeASound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });
}

//add event listener for key strokes
document.addEventListener("keydown", function(event) {
    var key = event['key'];
    
    makeASound(key);
    animateButton(key);
});

function animateButton(key){
    //access the active button
    var activeButton = document.querySelector("." + key);
    //add the pressed class to the button to make it look like it's been pressed
    activeButton.classList.add("pressed")
    //add a .1 second delay and remove the pressed class
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
    
    console.log(activeButton)
}

function makeASound(key){
    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(buttonInnerHTML);
    }
};