var numsquares = 6 ;
var colors = randomcolors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message= document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


 easybtn.addEventListener("click",function(){
 	hardbtn.classList.remove("selected");
 	easybtn.classList.add("selected");
 	numsquares= 3;
 	colors = randomcolors(numsquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for( var i = 0 ; i< squares.length ; i++){
 		if(colors[i]){
 			squares[i].style.backgroundColor = colors[i];
 		}
 		else{
 			squares[i].style.display = "none"; 		}
 	}
 });

  hardbtn.addEventListener("click",function(){
 	easybtn.classList.remove("selected");
 	hardbtn.classList.add("selected");
 	numsquares = 6;
 	colors = randomcolors(numsquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for( var i = 0 ; i< squares.length ; i++){
 			squares[i].style.backgroundColor = colors[i];
 			squares[i].style.display = "block"; 		
 	}
 });

 

resetbutton.addEventListener("click",function(){
	//generate new colors
	colors = randomcolors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = ""; 
	this.textContent = "New Colors"; 
	for( var  i =0 ;i <squares.length ;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for( var i = 0 ; i < squares.length ; i++){
	//initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//all click listeners to squares
	squares[i].addEventListener("click", function(){
		//get color of clicked square and compare color to pickedColor
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Correct!"
			resetbutton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all sqaures to match answer
	for(var i = 0 ; i< squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor( Math.random() * colors.length );
	return colors[random];
}

function randomcolors(num){
	//make an array
	var arr = [];
	
	for( var  i = 0 ; i<num ; i++){
		//get random colors and push into array
		arr.push(generate());
	}
	//return array
	return arr;
}
function generate(){
	// pick a "red" from 0 to 255 and fro G and B as well
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" +r + ", " + g + ", "+ b + ")";
}