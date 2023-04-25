'use strict';
let easy=(n1,n2)=>{
    let str="";
    for(let k=n1;k<=n2;k++){
    let i=2;let j=0;
    while(i*i<=k && j!=1){
        if (k % i == 0) j=1;
        i++;
    }
       j==1?str=str:str+=k+" ";
    }
    return console.log(str);
}
let n1=prompt('Введіть перше число діапазону');
let n2=prompt('Введіть останнє число діапазону');
if(isNaN(parseInt(n1))||isNaN(parseInt(n2))||n1==""||n2==""||n1==" "||n2==" ") console.log("Потрібно ввести число")
else if(parseInt(n2)<parseInt(n1)) console.log(`Перше число має бути меншим за друге. ${n1}>${n2}`)
else easy(parseInt(n1),parseInt(n2));