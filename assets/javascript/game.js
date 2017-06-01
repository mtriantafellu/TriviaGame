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
$('#startBtn').on("click", function() {

	$('#wrapper').removeClass('hidden');
	$('#startBtn').addClass('hidden');
	 
});	// End startBtn

//on.Click resetBtn hide three panels
$("#resetBtn").on("click", function() {

	$('#wrapper').addClass('hidden');
	$('#startBtn').removeClass('hidden');

}); // End resetBtn	

//=======================
//Start Questions/Answers:
/*
var repo = {
	question1: {
		question: "What is the third planet from sun?",
		answer: "Earth",
		option1: "Mars",
		option2: "Venus",
		option3: "Saturn",
	},
		question: "What planet has a red spot?",
		answer: "Jupiter",
		option1: "Mercury",
		option2: "Neptune",
		option3: "Pluto",
	}
},
*/

//=======================
//  Timer Function Starts:
window.onload = function() {
  $("#startBtn").on("click", stopwatch.start);
  $("#resetBtn").on("click", stopwatch.reset);
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