var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelector("li");
var deleteBtn = document.getElementById("delete-btn");

function inputLength() {
  return input.value.length;
}
function createElementList(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value + " "));
  ul.appendChild(li);
  
  var deleteButton = li.appendChild(document.createElement("button"));
  deleteButton.appendChild(document.createTextNode("Delete"));

  li.addEventListener("click", function(){
    this.classList.toggle("done");
  })

  deleteButton.addEventListener("click", function(){
    this.parentElement.remove();
  })
  
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
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

listItem.addEventListener("click", function(){
  this.classList.toggle("done");
});

deleteBtn.addEventListener("click", function(){
  this.parentElement.remove();
})