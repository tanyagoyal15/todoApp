
var ul = document.getElementById("list");


var addButton = document.getElementById("add");
addButton.addEventListener("click" , addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click" , removeItem);



function addItem() {
	var input = document.getElementById("input");
	var item = input.value;
	ul = document.getElementById("list");
	var textnode = document.createTextNode(item); // whatever input the user enters we are grabbing it in the textnode.

	if (item == "") {
		return false;
	} else {
		var li = document.createElement("li"); //we are creating a new list item ie li.
		
		var checkbox = document.createElement("input"); //we are creating a checkbox of type input;
		checkbox.type = "checkbox";
		checkbox.setAttribute("id" , "check");
		
		var label = document.createElement("label"); //we are creating a label.
		label.setAttribute("for" , "item");

		//adding these element on web page
		ul.appendChild(label);
		li.appendChild(checkbox);
		label.appendChild(textnode);
		li.appendChild(label);
		ul.insertBefore(li, ul.childNodes[0]);

		setTimeout(() => {
			li.className = "visual";
		}, 4);

		input.value = "";
	}
}

function removeItem() { // this loop will just go through each list element i.e. the tasks that we have written
	li = ul.children;
	for(let index = 0; index < li.length; index++) {
		while(li[index] && li[index].children[0].checked) { // this loop will remove only list items that are checked
			ul.removeChild(li[index]);
		}
	}
}