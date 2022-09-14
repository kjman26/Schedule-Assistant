//current date and time
var time = moment().format("MMMM Do, YYYY, hh:mm a")
$("#timeStamp").text(time)


var eventSlots = document.querySelectorAll("events")
eventSlots.forEach(eventSlots, function(){
    if (eventSlots.dataset.number<time){
        console.log('late')
    }
})