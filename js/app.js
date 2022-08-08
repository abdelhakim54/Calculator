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
    return b == 0 ? "∞":a/b ;
}

function modulo(a, b){
    return b == 0 ? alert('Math Error') : a % b;
}

function operate( first,operator, second){
    first = +first;
    second = +second;
    if(operator == "+") return add(first, second);
    else if(operator == "x") return multiply(first, second);
    else if(operator == "-") return subtract(first, second);
    else if(operator == "/") return divide(first, second);
    else if(operator == "%") return modulo(first, second);
}

const digits = document.querySelectorAll(".digits");
const operations = document.querySelectorAll(".operation")
const display = document.querySelector(".display")


const ac = document.querySelector(".clear-all");
const c = document.querySelector(".clear");
const equalButton = document.querySelector("#equal");

ac.addEventListener("click", () => display.textContent = "");
c.addEventListener("click", () =>{
    //delete rwo spaces in case of operators
    if(display.textContent.slice(-1) == " ")display.textContent = display.textContent.slice(0, -2);
    // remove one digit in case of numbers
    else display.textContent = display.textContent.slice(0, -1);
});
equalButton.addEventListener("click", () => {
    if(display.textContent.split(" ").length == 3){
        evaluate();
    }
})

digits.forEach(digit => {
    digit.addEventListener("click", function(e){
        if(display.textContent.trim() == '0')display.textContent = "";
        display.textContent += e.target.textContent ;
        });
});

operations.forEach(operation => {
  operation.addEventListener("click", (e) => {
    //the display contains no operation
    if(!display.textContent.trim().includes(" ")){
        display.textContent += e.target.textContent;
    }
    //if the display contains one operation without a second operand
    else if (display.textContent.slice(-1) == " "){
        //change the actual operator
        display.textContent = display.textContent.trim().slice(0,-2) + e.target.textContent
    }
    else{
        evaluate();
        display.textContent += e.target.textContent;   
    }
    })  
})


function evaluate(){
    firstOperand = display.textContent.split(" ")[0] || "0";
    operator = display.textContent.split(" ")[1];
    secondOperand = display.textContent.split(" ")[2];
    if(firstOperand && secondOperand && operator) display.textContent = operate(firstOperand, operator, secondOperand);
}