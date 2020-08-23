var colors = [ 
    "rgb(255, 0, 0)",
    "rgb(160, 82, 45)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
]

var squares = document.querySelectorAll(".squares");

var pickedColor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message")

colorDisplay.textContent=pickedColor;

for(var i = 0; i < squares . length; i++){
 squares[i].style.backgroundColor = colors[i];

 // add click listener to squares
 squares[i].addEventListener("click", function(){
    
    // grad color of clicked square
 var clickedColor = this.style.backgroundColor;
    // compair color of pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent= "Correct!";
        // changeColors("clickedColor");
    } else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent="Try Again"
    }
});

};

// function changeColors(colors){
//     // loop through all squares
//     for(var i= 0; i < squares.length; i++){
//         // change each color to match the given color
//         squares[i].style.backgroundColor = colors; 
//     };
// }; 



