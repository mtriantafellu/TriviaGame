//Buttons:
//  startBtn
//  resetBtn

//IDs:
//  panelText
//  timer

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

$(document).ready(function() {

//When window is first loaded:
window.onload = function() {
};

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

//  Timer Function Starts:
window.onload = function() {
  $("#startBtn").on("click", stopwatch.start);
  $("#resetBtn").on("click", stopwatch.reset);
};

var intervalId;
var clockRunning = false;
var stopwatch = {
	//initial time = 10seconds
	time: 10,

	//Start
	start: function() {

		// DONE: Use setInterval to start the count here and set the clock to running.
	    if (!clockRunning) {
	        intervalId = setInterval(stopwatch.count, 1000);
	        clockRunning = true;
	    }
	},  // End Start

	//Reset
	reset: function() {
		clearInterval(intervalId);
		clockRunning = false;
		stopwatch.time = 10;
		$('display').html("00:10");
	    
	    //Restart
	    intervalId = setInterval(stopwatch.count, 1000);
	    clockRunning = false;

	// DONE: Change the "display" div to "00:00."
	$("#display").html("00:10");

	},  // End Reset
	
	//Counter	
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
		    }

		    return minutes + ":" + seconds;
	  	}

}; // End Timer


}); // End document.ready