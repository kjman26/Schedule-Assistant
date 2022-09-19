var save = document.querySelectorAll('.save');

var userInput = document.querySelectorAll(".one");


function saveEvent(){
   for (i=0; i<userInput.length; i++){
    if(userInput[i].value){
   localStorage.setItem("eventList", userInput[i].value);
   console.log(userInput[i].value)}
}
};

save.forEach(save => save.addEventListener('click', saveEvent())
);
// save.addEventListener("click", saveGame);
// console.log(userInput.value)


