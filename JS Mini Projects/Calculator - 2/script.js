

const number =  document.getElementById("number");
const AC = document.getElementById("AC");
const C = document.getElementById("C");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");




AC.addEventListener("click" , function(event){
    number.value = "";

})
C.addEventListener("click" , function(event){
    number.value = "";

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




