$(document).ready(function(){

$('.saveBtn').on("click", function(){
    console.log(this);
       
    var userEvent = $(".one").sibling()
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, JSON.stringify(userEvent));
   console.log(userEvent.value);
});
});

$("#nineAM .one").val(localStorage.getItem("nineAM"));
$("#tenAM .one").val(localStorage.getItem("tenAM"));
$("#elevenAM .one").val(localStorage.getItem("elevenAM"));
$("#twelvePM .one").val(localStorage.getItem("twelvePM"));
$("#onePM .one").val(localStorage.getItem("onePM"));
$("#twoPM .one").val(localStorage.getItem("twoPM"));
$("#threePM .one").val(localStorage.getItem("threePM"));
$("#fourPM .one").val(localStorage.getItem("fourPM"));
$("#fivePM .one").val(localStorage.getItem("fivePM"));


// var userInput = document.querySelectorAll("one");
var divs = document.querySelectorAll(".divs")
function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); // use of moment.js

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker(); //re-run function
// function saveEvent(){
//    for (i=0; i<userInput.length; i++){
//    localStorage.setItem("eventList", userInput[i].value);
//    console.log(userInput[i].value)}
// };   
// });
// if(userInput.id === $('.save').dataset){
//  divs.forEach($(".save")).on("click", saveEvent); 
// }
// else{
//     console.log('wrong')
// };

// save.addEventListener("click", saveGame);
// console.log(userInput.value)
