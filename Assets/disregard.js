var save = document.querySelector('#save');

var userInput = document.querySelector("#one");


function saveGame(){
   if(userInput.value){
//    userInput.textContent = 
   localStorage.setItem("eventList", userInput.value);
   console.log(userInput.value)}
};

save.addEventListener("click", saveGame);
console.log(userInput.value)


