/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/

var memo= {};
function fibonacci(){
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    return val;
}

function f(n) {
    var value;
    if(memo.hasOwnProperty(n)){
        value = memo[n];
    }else{
        memo[n] = value;
        return value;
    }
}

console.log(fibonacci(15));