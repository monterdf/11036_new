//1. Create a function that takes an array of numbers and alert "!!!!!"
//if the digit 5 appears in the array. Otherwise, return "there is no 5 in the array".


function functionName(arr) {
    if (arr.some(num => `${num}`.includes('5'))) {
       alert("!!!!!");
    } 
    else{
        alert("there is no 5 in the array");
    }
 }


let iterations=prompt('Number of Indexes: ');

var arr = [];                             

for (var i = 0; i < iterations; i++) {              
  arr.push(prompt('Enter Number: ' + (i+1))); 
}

alert('Full Array: ' + arr.join(', '));
alert(functionName(arr));

