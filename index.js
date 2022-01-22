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