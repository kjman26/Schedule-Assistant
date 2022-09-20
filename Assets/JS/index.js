$(document).ready(function(){

    var time = moment().format("MMMM Do, YYYY, hh:mm a")
    $("#timeStamp").text(time)

});

//save on click of the buttons
//$('.saveBtn').click(function(){
  //  console.log(this);
//     var userEvent = $(".saveBtn").siblings(".saveBtn").value;
//     var time = $(this).parent().attr("id");
    
//     localStorage.setItem(time, $(".saveBtn").val());
//    console.log(userEvent.value);

//} 
//});
 const saveToDo =(event)=>{
    const toDoTime = $(event.currentTarget).parent().attr('id');
    const toDo = $(event.currentTarget).siblings('input').val();
    
    localStorage.setItem(toDoTime,JSON.stringify(toDo))
 };

$(".saveBtn").on('click',(event)=>{
    event.preventDefault();
    saveToDo();
});
// get previous events
$("#hour9 .saveBtn").val(localStorage.getItem("nineAM"));
$("#hour10 .saveBtn").val(localStorage.getItem("tenAM"));
$("#hour11 .saveBtn").val(localStorage.getItem("elevenAM"));
$("#hour12 .saveBtn").val(localStorage.getItem("twelvePM"));
$("#hour13 .saveBtn").val(localStorage.getItem("saveBtnPM"));
$("#hour14 .saveBtn").val(localStorage.getItem("twoPM"));
$("#hour15 .saveBtn").val(localStorage.getItem("threePM"));
$("#hour16 .saveBtn").val(localStorage.getItem("fourPM"));
$("#hour17 .saveBtn").val(localStorage.getItem("fivePM"));


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
