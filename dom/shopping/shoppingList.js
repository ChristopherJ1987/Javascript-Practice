// Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

// 1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
let ul = document.querySelector('ul');
let input = document.getElementById('item');
let button = document.querySelector('button');

// 2. Create a function that will run in response to the button being clicked.
// 3. Inside the function body, start off by storing the current value of the input element in a variable.
// 4. Next, empty the input element by setting its value to an empty string — ''.
button.onclick = function() {
    let currentVal = input.value;
    console.log(currentVal);
    currentVal.value = "";
    console.log(currentVal);

// 5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
let li = document.createElement('li');
let span = document.createElement('span');
let deleteButton = document.createElement('button');

// 6. Append the span and the button as children of the list item.
li.appendChild(span);
li.appendChild(deleteButton);

// 7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
span.textContent = currentVal;
deleteButton.textContent = 'Delete';

// 8. Append the list item as a child of the list.
ul.appendChild(li);

// 9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
deleteButton.onclick = function(e) {
    ul.removeChild(li);
}
// 10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
currentVal.focus();
};