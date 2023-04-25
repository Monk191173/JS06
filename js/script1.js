'use strict';

let fib = numb => {
    let str="";
    for (let i = 1; i <= numb; i++) {
        a = second;
        second += first;
        first = a;
        str+=second+" ";
    }
    console.log(`fib(${numb}):${str}`)
}


let first = 1;
let second = 0;
let a;
let numb = prompt("Введить кількіть елементів послідовності Фібаначі.");
if (!isNaN(numb) && numb != "" && numb != " ") fib(numb)
else alert("Введіть число...");