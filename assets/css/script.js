//Display the current day at the top of the calendar
//When i open the planner
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

// Save button listener 
$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
});
//selects time blocks present past future with color red grey green 
//When looking at the timeblocks for that day
var time = [00,01,02,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

console.log(time);

function hourTracker() {
    var d = new Date();
    var n = d.getHours();
    return parseInt(n);
}
console.log(hourTracker());

$(".time-block").each(function (element) {
    console.log(this);
    var timeRow = $(this);
    var now = hourTracker();
    var time = parseInt(timeRow.attr("id").split("-")[1]);
    console.log(time);
    if (now === time) {
        $(this).addClass("present");
    }
    if (now > time) {
        $(this).addClass("past");
    }
    if (now < time) {
        $(this).addClass("future");
    }
});


// text for that event is saved in local storage after calling value of hour-9
// Write code here to check if there are todos in localStorage when i refresh the page
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

