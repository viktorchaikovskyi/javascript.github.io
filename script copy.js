// let array = ['plum.png', 'orange.jpg', 'apple.bmp']

// console.log(array[2]);

/** Цикли */

// let num = 50;
//     // while (num < 55) {
//     //     console.log(num);
//     //     mun++;
//     // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         break                   //перерве цикл
//         /** continue            //перерве цикл в даному значені і продовжить його далі */                 
//     }
//     console.log(i);
// }

//* Функции */

//* Callback функции */

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}
learnJS("JavaScript", function() {
    console.log("Я прошел 3-й урок");
})


//* Объекты */

let options = {
    width: 1024,
    height: 768,
    name: "test"
};

console.log(options.name);
options.bool = false;       // додавання нових значень в обєкт
options.colors = {
    border: "black",
    background: "red"
};

delete options.bool;         // видалення значення з обєкту

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options.length));

//* Массивы */

let array = ["first", 2, 3, "four", 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//* forEach
array.forEach( function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});
console.log(array);

let mass = [1, 3, 4, 6, 7];

//* for.in
for (let key of mass) {         // (of) отримати значення масива
    console.log(key);
}

let ans = prompt("", ""),
    arr = [];
arr = ans.split(",");

console.log(arr);


let arr = ["aaa", "zzz", "pp", "rrr"],
    i = arr.join("-");              // склеює масив

console.log(i);

let arr = ["aaa", "zzz", "pp", "rrr"],
    i = arr.sort();              // сортує масив (тільки лінійні значення)

console.log(arr);


let arr = [1, 15, 4],
    i = arr.sort(compareNum);
function compareNum(a, b) {
    return a-b;
}

console.log(arr);


//* ООП */

let soldier = {
    health: 400,
    armor: 200
}

let john = {
    health: 100
}
john.__proto__ = soldier;

console.log(john);
console.log(john.armor);