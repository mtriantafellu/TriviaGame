//Buttons:
//  startBtn
//  resetBtn

//IDs:
//  wrapper
//  panelText
//  timer
//  display
//  question1
//  options1

//PseudoCode:

//User clicks button
//on.Click display questions in panel
//on.Click display timer at top of panel - timer starts when start clicked
//on.Click display reset button at bottom - resets entire page
//Four questions with four possible answers
//Create an object with questions and answers
  //  Create an array of questions
  //  Create an array of answers
  //  Create an array of filler options
//Slot 0 for Questions, Slot 1-4 for answers
//Pull slot 0 post in top
//Pull slot 1-4 post below with 4 buttons
//ScoreScreen
//Display:
  //  Total# Correct answers
  //  Total# Incorrect answers
//Reset to Start

//======================
$(document).ready(function() {

//on.Click startBtn reveal three panels and start timer
$('#startBtn').on('click', function() {

	$('#wrapper').removeClass('hidden');
	$('#startBtn').addClass('hidden');
	 
});	// End startBtn

//on.Click resetBtn hide three panels
$('#resetBtn').on('click', function() {

	$('#wrapper').addClass('hidden');
	$('#startBtn').removeClass('hidden');

}); // End resetBtn	

//=======================
//Start Questions/Answers:

var repo = {
	option1: {
		question1: "What Planet is third from the sun?",
		answer1: "Earth",
		option1: "Mars",
		option2: "Venus",
		option3: "Mercury",
	},
	option2: {
		question2: "What Planet is closest to the sun?",
		answer2: "Mercury",
		option1: "Venus",
		option2: "Mars",
		option3: "Earth",
	},
};

questionInPlay: null

console.log(repo.option1.question1);
console.log(repo.option1.answer1);

$("#question1").text(repo.option1.question1);
$('#answer1').text(repo.option1.answer1);
$('#option1').text(repo.option1.option1);
$('#option2').text(repo.option1.option2);
$('#option3').text(repo.option1.option3);

console.log(repo.option2.question2);
console.log(repo.option2.answer2);

$("#question2").text(repo.option2.question2);
$('#answer2').text(repo.option2.answer2);
$('#option21').text(repo.option2.option1);
$('#option22').text(repo.option2.option2);
$('#option23').text(repo.option2.option3);

}; // End setupGame


//Possible question ideas:
//"What planet has a red spot?",
//"What planet is closest to the sun?",
//=======================
//  Timer Function Starts:
window.onload = function() {
  $('#startBtn').on('click', stopwatch.start);
  $('#resetBtn').on('click', stopwatch.reset);
}; // End Window.onload for Timer

var intervalId;
var clockRunning = false;
var stopwatch = {
	//initial time = 10seconds
	time: 5,

	start: function() {

		// DONE: Use setInterval to start the count here and set the clock to running.
	    if (!clockRunning) {
	        intervalId = setInterval(stopwatch.count, 1000);
	        clockRunning = true;
	    }
	},  // End Start

	reset: function() {
		clearInterval(intervalId);
		stopwatch.time = 5;
		intervalId = setInterval(stopwatch.time);
		clockRunning = false;
		$('display').html("00:05");

	// DONE: Change the "display" div to "00:00."
	$("#display").html("00:05");

	},  // End Reset
	
	count: function() {
		//Decrement stopwatch time by 1
	    stopwatch.time--;
	    var converted = stopwatch.timeConverter(stopwatch.time);
	    console.log(converted);

	    //Display in HTML
	    $("#display").html(converted);
	
	}, // End Count
	
	timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    if (minutes === 0) {
		      minutes = "00";
		    }
		    else if (minutes < 10) {
		      minutes = "0" + minutes;
		    }

		    if (seconds == 0) {
		    	clearInterval(intervalId);
		    	clockRunning === false;
		    	//alert("Game Over!")
		    }

		    return minutes + ":" + seconds;
	  	}

}; // End Timer

}); // End document.ready