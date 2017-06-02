//Buttons:
//  startBtn
//  resetBtn
//  button# (1-4)

//IDs:
//  wrapper
//  panelText
//  timer
//  display
//  question#
//  answer#
//  options#
//  correct
//  incorrect

//PseudoCode:

//User clicks button
//on.Click Start display questions in panel
//on.Click Start display timer at top of panel - timer starts when start clicked
//on.Click Start display reset button at bottom - resets entire page
//Two questions with four possible answers
//Create an object with questions and answers
  //  Create an array of questions
  //  Create an array of answers
  //  Create an array of filler options
//Slot 0 for Questions, Slot 1-4 for answers
//Pull slot 0 post in top
//Pull slot 1-4 post below with 4 buttons
//if timer != 0 user can select a button
//if user selects button restart timer
//if timer == 0 user cannot select a button return score screen (correct/incorrect)
//if user button selected == answer, correct++
//if user button selected != answer, incorrect++
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

var repo = [ {
		question: "What Planet is third from the sun?",
		options: ["Earth", "Mars", "Venus", "Mercury"],
		answer: 0,
	},
	{
		question: "What Planet is closest to the sun?",
		options: ["Mercury", "Venus", "Earth", "Mars"],
		answer: 3,
	},
];

console.log(repo[0].question[1]);
console.log(repo[1].options[0]);

$("#question1").text(repo[0].question);
$('#answer1').text(repo[0].options[0]);
$('#option1-1').text(repo[0].options[1]);
$('#option1-2').text(repo[0].options[2]);
$('#option1-3').text(repo[0].options[3]);

$("#question2").text(repo[1].question);
$('#answer2').text(repo[1].options[0]);
$('#option2-1').text(repo[1].options[1]);
$('#option2-2').text(repo[1].options[2]);
$('#option2-3').text(repo[1].options[3]);

var correct = 0;
	console.log('Correct', correct);
var incorrect = 0;
	console.log('Incorrect', incorrect);

//If answer1 selected ++ to correct counter
$('#answer1').on('click', function() {
	correct++;
	console.log('Correct', correct);
	$('#correct').text(correct);
});

//If answer2 selected ++ to correct counter
$('#answer2').on('click', function() {
	correct++;
	console.log('Correct', correct);
	$('#correct').text(correct);
});

//If any option selected ++ to incorrect counter
$('#option1-1').on('click', function() {
	incorrect++;
	console.log('Inorrect', incorrect);
	$('#incorrect').text(incorrect);
});

$('#option1-2').on('click', function() {
	incorrect++;
	console.log('Inorrect', incorrect);
	$('#incorrect').text(incorrect);
});

$('#option1-3').on('click', function() {
	incorrect++;
	console.log('Inorrect', incorrect);
	$('#incorrect').text(incorrect);
});

$('#option2-1').on('click', function() {
	incorrect++;
	console.log('Inorrect', incorrect);
	$('#incorrect').text(incorrect);
});

$('#option2-2').on('click', function() {
	incorrect++;
	console.log('Inorrect', incorrect);
	$('#incorrect').text(incorrect);
});

$('#option2-3').on('click', function() {
	incorrect++;
	console.log('Inorrect', incorrect);
	$('#incorrect').text(incorrect);
});

//Reset the page
$('#resetBtn').on('click', function() {
	location.reload(true);
});


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