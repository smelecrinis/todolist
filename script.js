var button = document.getElementById("add");
var clearButton = document.getElementById("clear");
var input = document.getElementById("textbox");
var ul = document.querySelector("ul");


// Check length of input field
function inputLength(){
    return input.value.length;
}

//Create new list item
function createListElement(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        input.focus();
        
        // Create done button and append it to list element
        var doneBtn = document.createElement("button");
        var checkBtn = document.createElement("i");
        checkBtn.classList.add("fa-solid", "fa-check");
        doneBtn.appendChild(checkBtn);
        li.appendChild(doneBtn);
        doneBtn.onclick = toggleDone;

        // Create delete button and append it to list element
        var delBtn = document.createElement("button");
        var trashBtn = document.createElement("i");
        trashBtn.classList.add("fa-solid", "fa-trash");
        delBtn.appendChild(trashBtn);
        li.appendChild(delBtn);
        delBtn.onclick = removeItem;

                
        // completed status action
        function toggleDone(){
            li.classList.toggle("done");
        }

        // delete item action
        function removeItem(){
            ul.removeChild(li);    
        }
}

// Stops empty entries in the list
function AddListAfterClick(){
    if (inputLength() > 0 ) {
        createListElement();
    }
}

// Clear all list items 
function clearList(){
    ul.innerHTML = "";       
}

button.addEventListener("click", AddListAfterClick);
clearButton.addEventListener("click", clearList);
