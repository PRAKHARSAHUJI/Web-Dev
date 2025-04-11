



const number =  document.getElementById("number");
const AC = document.getElementById("AC");
const C = document.getElementById("C");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const opposite = document.getElementById("opposite");




opposite.addEventListener("click", function () {
    let val = number.value.trim();

    // Match: everything before last number, the operator before it (optional), and the number
    let match = val.match(/^(.*?)([\+\-\*\/]?\s*)(-?\d+\.?\d*)$/);
    console.log(match)
    if (match) {
        let before = match[1];         // everything before the operator & number
        let operator = match[2];       // the operator (could be '+ ', '- ', etc)
        let numberPart = match[3];     // the last number (with possible minus sign)

        let flipped = parseFloat(numberPart) * -1;

        // Final result: keep spacing and operator, but flip the number
        number.value = before  + operator + flipped;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    number.focus();
});

document.addEventListener("click", function () {
    number.focus();
});


AC.addEventListener("click" , function(event){
    number.value = "";

})
C.addEventListener("click" , function(event){
    number.value = number.value.slice(0,-1);

})

function appendToDisplay(input){
    number.value += input;
};

equal.addEventListener("click",function(event){
    try {
        number.value = eval(number.value);
    } catch (error) {
        number.value = "ERROR";
    }
})

number.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        try {
            number.value = eval(number.value);
        } catch (error) {
            number.value = "ERROR";
        }
    }
})

number.addEventListener("keydown",function(event){
    if(event.key === "="){
        event.preventDefault();
        try {
            number.value = eval(number.value);
        } catch (error) {
            number.value = "ERROR";
        }
    }
})




function appendToDisplay(value) {
    const lastChar = number.value.slice(-1);
    const operators = ["+", "-", "*", "/","."];

    if (operators.includes(lastChar) && operators.includes(value)) {
        // Replace the last operator with the new one
        number.value = number.value.slice(0, -1) + value;
    } else {
        number.value += value;
    }
}


