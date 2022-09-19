$(document).ready(function(){

    var time = moment().format("MMMM Do, YYYY, hh:mm a")
    $("#timeStamp").text(time)

});

//save on click of the buttons
$('.saveBtn').on("click", function(){
    console.log(this);
       
    var userEvent = $(".one").sibling(".one").value
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, JSON.stringify(userEvent));
   console.log(userEvent.value);
});
// ;get previous events
$("#nineAM .one").val(localStorage.getItem("nineAM"));
$("#tenAM .one").val(localStorage.getItem("tenAM"));
$("#elevenAM .one").val(localStorage.getItem("elevenAM"));
$("#twelvePM .one").val(localStorage.getItem("twelvePM"));
$("#onePM .one").val(localStorage.getItem("onePM"));
$("#twoPM .one").val(localStorage.getItem("twoPM"));
$("#threePM .one").val(localStorage.getItem("threePM"));
$("#fourPM .one").val(localStorage.getItem("fourPM"));
$("#fivePM .one").val(localStorage.getItem("fivePM"));


function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); // use of moment.js

    // loop over time blocks
    $(".timeSlot").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(hourBlock, currentHour)

        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (hourBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        };
    });
};
hourTracker(); 
