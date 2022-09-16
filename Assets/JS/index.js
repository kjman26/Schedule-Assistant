//current date and time
var time = moment().format("MMMM Do, YYYY, HH:mm")
$("#timeStamp").text(time)


// set user input to local storage




var saveBtn = document.getElementById('#save')


//   when i click save, move the text content (aka value) to local storage
var userEvent = document.querySelector("#events").value;
function save(){
 saveBtn.addEventListener("click",function(event){
    event.preventDefault();     
    localStorage.setItem("userEventList", JSON.stringify(userEvent));
        
  });
};
    
console.log(userEvent); 

//get events


//color-coding




//does .value = the text from the input box?
//why is value saying undefined?