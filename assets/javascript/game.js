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
//Slot 0 for Questions, Slot 1-4 for answers
//Pull slot 0 post in top
//Pull slot 1-4 post below with 4 buttons

//How to Show/Hide IDs:
/* 
To show it: $("#myId").removeClass('hidden');
To hide it: $("#myId").addClass('hidden');
To toggle it: $("#myId").toggleClass('hidden'); 
*/

$(document).ready(function() {

$('#panelText').addClass('hidden');
$('#timer').addClass('hidden');
$('#resetBtn').addClass('hidden');

$("#startBtn").on("click", function() {

	$('#timer').removeClass('hidden')
	$('#panelText').removeClass('hidden')
	$('#resetBtn').removeClass('hidden')

	});	// End startBtn

}); // End document.ready