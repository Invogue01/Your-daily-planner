console.log(moment());

// jQuery
$(function() {});


// current day
var today = moment().format("dddd, Do MMMM");

// current hour
var now = moment().format("H A");

// set variable for day planner
// time must be in "H A" format
var planDay = [
	{ time: "9 AM", event: "" },
	{ time: "10 AM", event: "" },
	{ time: "11 AM", event: "" },
	{ time: "12 PM", event: "" },
	{ time: "1 PM", event: "" },
	{ time: "2 PM", event: "" },
	{ time: "3 PM", event: "" },
	{ time: "4 PM", event: "" },
	{ time: "5 PM", event: "" }
];

// Header
// show current day in header
$("#currentDay").text(today);

// check local storage for previous saved day planner
var checkPrevious = JSON.parse(localStorage.getItem("dayPlanner"));

// get previously saved day planner from local storage (if exists)
if (checkPrevious !== null) {
	planDay = checkPrevious;
}

// Day Planner
// for each time-block in business hours create color coded row
planDay.forEach(function(timeBlock, index) {
	// variable for the time block label
	var timeLabel = timeBlock.time;

	// variable for the color of the text area
	var blockColor = colorMe(timeLabel);

	// variable for the user entry row including label, user event, and save button
	var block =
		'<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		blockColor +
		' description">' +
		timeBlock.event +
		'</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';

	// show time-block rows
	$(".container").append(block);
})

// function for color coding
function colorMe(time) {
	// variables to compare time-block time to current time
	var testNow = moment(now, "H A");
	var testBlock = moment(time, "H A");

	// return color style for time-block
	if (testNow.isBefore(testBlock) === true) {
		return "future";
	} else if (testNow.isAfter(testBlock) === true) {
		return "past";
	} else {
		return "present";
	}
}


// when save button is clicked
$(".saveBtn").on("click", function(event) {
	// variable for ID of target time-block
	var blockID = parseInt(
		$(this)
			.closest(".time-block")
			.attr("id")
	);

	// user entry in target time-block
	var userEntry = $.trim(
		$(this)
			.parent()
			.siblings("textarea")
			.val()
	);

	// save in day planner array at target index
	planDay[blockID].event = userEntry;

	// save to local storage
	localStorage.setItem("dayPlanner", JSON.stringify(planDay));
});
