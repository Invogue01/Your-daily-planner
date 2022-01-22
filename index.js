const moment= require("moment");
console.log(moment());

// jQuery
$(function() {});


// set variable for current day
var today = moment().format("dddd, MMMM Do");

// set variable for current hour
var now = moment().format("H A");

