function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return b == 0 ? "ERROR: cannot divide by zero":a/b ;
}

function operate(operator, first, second){
    if(operator == "add") return add(first, second);
    else if(operator == "multiply") return multiply(first, second);
    else if(operator == "subtract") return subtract(first, second);
    else if(operator == "divide") return divide(first, second);
}
