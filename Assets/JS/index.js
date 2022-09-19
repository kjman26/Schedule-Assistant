$(document).ready(function(){

    var time = moment().format("MMMM Do, YYYY, HH:mm")
    $("#timeStamp").text(time)

})
//current date and time



// set user input to local storage
var userInput = document.getElementsByClassName(".events");

function saveEvent(){
    for (i=0; i<userInput.length; i++){
     if(userInput[i].value){
    localStorage.setItem("eventList", userInput[i].value);
    $(".one").text = userInput[i]
    console.log(userInput[i].value)}
    };
 };

 $(".save").on("click",saveEvent);




//get events
function getEvents(){
    localStorage.getItem("eventList")
};
getEvents

//color-coding

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


//does .value = the text from the input box?
//why is value saying undefined?