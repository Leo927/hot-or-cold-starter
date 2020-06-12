function handleInstructionsModal() {
	
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});

}

//global variables
var targetNumber;


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();
	
	startNewGame();

  	$('.js-new-game').click(function(){
  		startNewGame();
  	});

  	handleSubmit();

});

function startNewGame()
{
	targetNumber = Math.floor(Math.random()*100+1);
	console.log("targetNumber is " + targetNumber );
	$("#feedback").text("Make your Guess!");
	$(".js-guess-count").text(0) ;
}

function handleSubmit()
{
	$("form").submit(function(event){
		event.preventDefault();
		var userGuess = $("#js-user-guess").val();
		if(validateInput(userGuess)==false)
		{
			$("#feedback").text("Invalid Input");
		}
		giveFeedback(userGuess);
		$("ul#guessList").append("<li>"+userGuess+"</li>");
	})
}

function giveFeedback(userGuess){


		if(userGuess > targetNumber)
		{
			$("#feedback").text("Too Hot");
			$(".js-guess-count").text(+($(".js-guess-count").text()) + 1) ;
		}
		else if(userGuess < targetNumber)
		{
			$("#feedback").text("Too Cold");
			$(".js-guess-count").text(+($(".js-guess-count").text()) + 1) ;
		}
		else
		{
			$("#feedback").text("Just Right");
		}
}

function validateInput(userGuess){
	if(userGuess>100 || userGuess <1 ) return false;
	if(!parseInt(userGuess)) return false;
	if(userGuess %1 !=0)return false;
	return true;
}