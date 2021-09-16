let num1 = document.getElementById("firstnum");
let num2 = document.getElementById("secondnum");
let result = document.getElementById("output");



// functions for computations --------------------------------------------

document.getElementById("add").addEventListener("click", function(){
    result.value = parseInt(num1.value) + parseInt(num2.value);
});

document.getElementById("sub").addEventListener("click", function(){
    result.value = parseInt(num1.value) - parseInt(num2.value);
});

document.getElementById("mul").addEventListener("click", function(){
    result.value = parseInt(num1.value) * parseInt(num2.value);
});

document.getElementById("div").addEventListener("click", function(){
    result.value = parseInt(num1.value) / parseInt(num2.value);
});

document.getElementById("active").addEventListener("click", dark);

//function for dark/light mode -------------------------------------------

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


