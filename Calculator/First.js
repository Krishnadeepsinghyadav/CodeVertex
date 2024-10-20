let string = "";
let evaluated = false; // To track if '=' was pressed
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        // If '=' is pressed, evaluate the expression
        if (buttonValue == '=') {
            try {
                string = eval(string).toString(); 
                // Evaluate and convert the result to a string
                document.querySelector('input').value = string;
                evaluated = true; // Mark as evaluated
            } catch {
                document.querySelector('input').value = "Error";
                string = ""; // Reset on error
            }
        } 
        // Reset the calculator if 'Reset' is pressed
        else if (buttonValue == 'Reset') {
            string = "";
            document.querySelector('input').value = string;
            evaluated = false; // Clear evaluation flag
        } 
        // Backspace functionality for 'X'
        else if (buttonValue.trim() == 'C') {
            if (string.length > 0) {
                string = string.slice(0, -1); // Remove the last character
                console.log(string);
                document.querySelector('input').value = string;
            }
        }
         
        else {
            // If a new operation is pressed after evaluation, continue from the result
            if (evaluated && isNaN(buttonValue)) {
                evaluated = false; // Allow further operations on the result
            } else if (evaluated && !isNaN(buttonValue)) {
                // If a number is pressed after evaluation, reset the string
                string = ""; 
                evaluated = false;
            }

            string += buttonValue; // Append new input to the string
            document.querySelector('input').value = string;
        }
    });
});
