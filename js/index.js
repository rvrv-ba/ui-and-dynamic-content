// Getting the references 
// to the interactive elements of the markup:
let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');

function addItem() {
    
	
	// clean up the eventual white space in input
	input.value = input.value.trim();
		
	// Do the indeted items below
	// if the user input is not empty:
		// Create the new list item
		let li = document.createElement('li');
    
    if (input.value) {
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
        error.innerText="";
    
          // If the user forgets to input item, alert the error message
        
    }else {
    let feedback = alert('Oops! Please enter an item.');
    let error = document.getElementById("error");
}
}
// else block ends here 

add.addEventListener('click', addItem);
