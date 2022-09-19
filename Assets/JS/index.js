//current date and time
var time = moment().format("MMMM Do, YYYY, HH:mm")
$("#timeStamp").text(time)


// set user input to local storage
var userInput = document.getElementsByClassName(".events");
function saveGame(){
   if(userInput.value){
   userInput.textContent = 
   localStorage.setItem("eventList", userInput.value);
   console.log(userInput.value)}
};

var save = document.querySelectorAll('.save');
function eventHandler(){
    for (i=0; i<save.length; i++){
    save[i].addEventListener("click", saveGame(i))
};
};








//   when i click save, move the text content (aka value) to local storage




    
// ; 

//get events


//color-coding




//does .value = the text from the input box?
//why is value saying undefined?