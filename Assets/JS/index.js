//current date and time
var time = moment().format("MMMM Do, YYYY, HH:mm")
$("#timeStamp").text(time)


// set user input to local storage

var save = document.querySelector('#save');
var userInput = document.querySelector(".events");


function saveGame(){
   if(userInput.value){
   userInput.textContent = 
   localStorage.setItem("eventList", userInput.value);
   console.log(userInput.value)}
};

save.addEventListener("click", saveGame);
//   when i click save, move the text content (aka value) to local storage




    
// ; 

//get events


//color-coding




//does .value = the text from the input box?
//why is value saying undefined?