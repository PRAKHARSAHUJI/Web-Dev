

const number =  document.getElementById("number");
const AC = document.getElementById("AC");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");




let firstValue = null;
let operator = null;


function appendToDisplay(input) {

    number.value += input;
}

AC.addEventListener("click" , function(event){
    number.value = "";
    firstValue = null; 
    operator = null;
})


add.addEventListener("click" , function(event){
    if(operator == null){
        firstValue = number.value;
        operator = "+"
        number.value = "";
    }
})

subtract.addEventListener("click" , function(event){
    if(operator == null){
    
        firstValue = number.value;
        operator = "-"
        number.value = "";
    }
})

multiply.addEventListener("click" , function(event){
    if(operator == null){
    
        firstValue = number.value;
        operator = "*"
        number.value = "";
    }
})

divide.addEventListener("click" , function(event){
    if(operator == null){
    
        firstValue = number.value;
        operator = "/"
    }
    number.value = "";
})



equal.addEventListener("click",function(event){
    let result;

    firstValue = parseFloat(firstValue);
    const secondValue = parseFloat(number.value);
    if(operator == "+"){
        result = firstValue + (secondValue);
    }
    if(operator == "-"){
        result = firstValue - (secondValue);
    }
   
    if(operator == "*"){
        result = firstValue * (secondValue);
    }
    if(operator == "/"){
        try {
            result = firstValue / (secondValue);
        } catch (error) {
            result = "ERROR"
        }
    }
    
    number.value = result;
    operator = null;
})


