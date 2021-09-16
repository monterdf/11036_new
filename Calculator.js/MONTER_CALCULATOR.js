let op = prompt('1 -- addition\n2 -- subtraction\n3 -- multiplication\n4 -- division\n\nEnter any of the numbers above to perform operation: ');
let num1 = parseFloat(prompt('Enter first number: '));
let num2 = parseFloat(prompt('Enter second number: '));
let result;

if (op != '1' && op != '2' && op != '3' && op != '4') {
    alert("IINITIAL INPUT IS INVALID");
}
else if (op == '1') {
    result = num1 + num2;
    alert(result);
}
else if (op == '2') {
    result = num1 - num2;
    alert(result);
}
else if (op == '3') {
    result = num1 * num2;
    alert(result);
}
else if (op == '4') {
    result = num1 / num2;
    alert(result);
}

