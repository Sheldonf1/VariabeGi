function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;

}

function multiply(num1, num2) {
    let product = num1 * num2
    return product;
}

function divide(num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}

function operators(operator, num1, num2) {

    if (operator == '*') {
        alert(num1 + '*' + num2 + '=' + multiply(num1, num2));

    } else if (operator == '+') {
        alert(num1 + '+' + num2 + '=' + add(num1, num2));

    } else if (operator == '/') {
        alert(num1 + '/' + num2 + '=' + divide(num1, num2));

    } else if (operator == '-') {
        alert(num1 + '-' + num2 + '=' + divide(num1, num2));
    }
}

let num1 = prompt("First Number");
let num2 = prompt("Second Number");
let operator = prompt("Choose:+,-,*,/");
operators(operator, num1, num2);
