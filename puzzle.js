function calculate() {
    // Get user inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;

    // Perform calculation based on the selected operation
    var result;
    switch(operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result inside the result box
    var resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "Result: " + result;
}
