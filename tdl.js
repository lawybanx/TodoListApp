function newItem() {
	let item = document.querySelector('#input').value;
	let ul = document.querySelector("#list");
	let li = document.createElement('li');
  li.appendChild(document.createTextNode("- "+item));
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
}






