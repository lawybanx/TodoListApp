let todoList = [];
window.onload = function() {
  let lists = getItems();
  if(lists != null){
    
  for(let i =0; i < lists.length; i++){
    let ul = document.querySelector("#list");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(lists[i]));
    ul.appendChild(li);
    li.onclick = removeItem;
  }
  }
}

function newItem() {
  let item = document.querySelector('#input').value;
  storeItem(item);
	let ul = document.querySelector("#list");
	let li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.querySelector('#input').value="";
  li.onclick = removeItem;
}
document.body.onkeyup = function(list){
      if(list.keyCode == 13){
        newItem();
      }
  };
function removeItem(list) {
  list.target.parentElement.removeChild(list.target);
  deleteItem(list.target);

}

function getItems() {
  todoList = JSON.parse(localStorage.getItem('lists'));
  return todoList;
}

function storeItem(input) {
  let lists = getItems();
  if(lists != null){  
    lists.push(input);
    localStorage.setItem('lists', JSON.stringify(lists));
  } else{
    let list = [input];
    localStorage.setItem('lists', JSON.stringify(list));
  }
}

function deleteItem(input) {
  let lists = getItems();

  for(i = 0; i < lists.length; i++){
    if(lists[i] == input.innerHTML){
      lists.splice(i, 1);
      localStorage.setItem('lists', JSON.stringify(lists));
    }
  }
}





