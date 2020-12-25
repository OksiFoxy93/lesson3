// 1
let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5'];
let sum = 0;
for (let key of arr) {
    if (+key) {
        sum += +key;
    }
}
alert(sum);


// 2 - затрачено 20 минут
let arr = [];
let n = 3;
for (let i = 0; i < n; i++) {
    arr.push(Math.random().toFixed(2));
}
for (let key of arr) {
    console.log((key ** 5).toFixed(2));
}


// 3 - минут 50
let arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js');
arr.splice(1, 0, 'CommonJS');
let index = arr.indexOf('jQuery');
let deleted = arr.splice(index, 1);
alert(`${deleted} - Это здесь лишнее`);
console.log(arr);


// 4 - затрачено минут 30
let str = "Как однажды Жак звонарь сломал фонарь головой";
let arr = str.split(" ");
let nameJack = arr.splice(arr.indexOf('Жак'), 2).join(' ');
arr.splice(1, 0, nameJack);
let head = arr.splice(arr.indexOf('головой'), 1).join('');
arr.splice(-1, 0, head);
alert(arr.join(" "));


// 5 - 15 минут
let person = {
    name: "Jack",
    age: 23,
    gender: "m",
};
let userProperty = prompt("Введите название свойства");
if (userProperty in person) {
        alert(person[userProperty]);
    }else {
    person[userProperty] = prompt("Введите значение");
}


// 6 - 10 минут
let phoneModel = {
    brand: prompt("Введите марку телефона"),
    model: prompt("Введите модель телефона"),
    color: prompt("Введите цвет телефона"),
    display: prompt("Введите диагональ телефона"),
}
Object.assign(person, {phoneModel});


// 7 - около часа
let date = new Date();
date.setDate(date.getDate() - 365);
let dates = {
    ["Текущая дата"]: new Date(),
    ["Вторая дата"]: date,
}
let str = prompt("Введите дату");
if (Date.parse(str) < +dates["Текущая дата"] && Date.parse(str) > +dates["Вторая дата"] ) {
    console.log("Попадает");
} else {
    console.log("Не попадает");
}

// для визуального сравнения
console.log(+dates["Текущая дата"]);
console.log(+dates["Вторая дата"]);
console.log(Date.parse(str));


// 8 - 20 минут
let arr = [];
let n = 6;
for (let i = 0; i < n; i++) {
    arr.push(prompt());
}
let sum = 0;
for(let key of arr) {
    if(+key){
        sum += +key;
    }
}
alert(sum);
console.log(arr);


// 9 - часа 1,5 сидела, потом нагуглила за 10 минут
let array = [];
for (let i = 1; i <= 10; i++) {
    let t = [];
    for (let j = 1; j <= 10; j++) {
        t.push(`${i} х ${j} = ${i * j}`);
    }
    array.push(t);
}
console.log(array);


// 10
let img = {
    src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    alt: "",
    style: "border: 1px solid #ccc",
    width: "200",
}
console.log(img);