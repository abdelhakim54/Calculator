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

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display")

const ac = document.querySelector(".clear-all");
const c = document.querySelector(".clear");

ac.addEventListener("click", () => display.textContent = "");
c.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1));

buttons.forEach(button => {
    button.addEventListener("click", function(e){
        if(display.textContent.trim() == '0')display.textContent = "";
        display.textContent += e.target.textContent ;
        })
})