/*--------------2----------------- */
'use strict';
let progr = function (count_num, znam) {
    let sum = 0;
    for (let i = 0; i < count_num; i++)
        sum += znam ** i;
    return sum;
}

let progr_f = function (count_num, znam) {
    return (znam ** count_num - 1) / (znam - 1);
}



let q_member = prompt('Ведіть к-ть членів прогресії');
let denom = prompt('Введіть знаменник прогресії');
if ((!isNaN(q_member) && q_member != "" && q_member != " ") && (!isNaN(denom) && denom != "" && denom != " ")) {
    document.write('Розрахунок суми прогресії циклом:<br>');
    document.write(`Сума прогресії f(${q_member},${denom})=` + progr(q_member, denom));
    document.write('<hr>');
    document.write('Розрахунок суми прогресії формулою:<br>');
    document.write(`Сума прогресії f(${q_member},${denom})=` + progr_f(q_member, denom));
}
else document.write("Необхідно ввести два числа...");




