
var items = JSON.parse(localStorage.getItem('todo-list')) || [];

// function to add item to the items array
function addItem() {
  // get the value of the input box with querySelector
  var inputBox = document.querySelector('#todo-input');
  var item = inputBox.value
  
  
  if (item === "")
    return alert("You need to put in a number");


  items.push({
    value: item,
    time: (new Date()).toLocaleDateString("en-US")
  })
  

  localStorage.setItem('todo-list', JSON.stringify(items));
  
 
  listItems();
  
  
  inputBox.value = "";
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem('todo-list', JSON.stringify(items))
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem('todo-list', JSON.stringify(items));
  listItems();
}



function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li class="+ (items[i].done ? "done" : "") +">";
    list += items[i].value + " ";
    list += "<small title='click me to mark as done' class='label' onclick='markAsDone("+ i +")'>"+ items[i].time +"</small> ";
    list += "<span class='label alert' onclick='deleteItem("+ i +")'>delete</span></li>";
    
  }
  document.querySelector("#list-items").innerHTML = list;
}


(function() {
  listItems();
})();