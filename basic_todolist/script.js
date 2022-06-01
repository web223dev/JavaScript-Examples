var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createElementList(){
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  
  li.appendChild(document.createTextNode(input.value + " "));
  ul.appendChild(li);
  li.appendChild(deleteButton);
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.setAttribute("id", "delete-btn");
  input.value = "";
}

function addListAfterClick(){
  if(inputLength() > 0){
    createElementList();
  }
}

function addListAfterKeypress(event){
  if(inputLength() > 0 && event.keyCode === 13){
    createElementList();
  }
}

function doneTask(e){
  if(e.target.tagName.toLowerCase() === "li"){
    e.target.classList.toggle("done");
  }
}

function removeTask(e){
  if(e.target.id === "delete-btn"){
    e.target.parentElement.remove();
  }
}

function handleUIClick(e){
  doneTask(e);
  removeTask(e);
}

ul.addEventListener("click", handleUIClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);