let str = 'js'
console.log(str.toLocaleUpperCase());

function findStr(arr, str) {
    arrNew = arr.filter(el => el.toLocaleUpperCase().includes(str.toLocaleUpperCase()))
    console.log(arrNew);
}
findStr(["Тын дын", "ты что ", "не слышишь меня что ли", "?"], "Тын дЫн")

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

let arr = [52, 53, 49, 77, 21, 32]
console.log(Math.max(...arr));
console.log(Math.min(...arr));

function random() {
    return Math.floor( Math.random()*10)
}
console.log(random());

function makeArr(n) {
    let arr = []
    for (let i = 0; i <  Math.floor(n / 2); i++) {
        arr.push(Math.floor(Math.random() * 10))
    }
    return arr
}
console.log(makeArr(10));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(5, 15));

function getFutureDate(daysAhead) {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    return date
  }
  
  const fourDays = getFutureDate(73)
  console.log(fourDays)

let currentDate = new Date();

/* Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды] */

const options = { weekday: 'long', year: 'numeric', month: 'long', 
day: 'numeric'}; 

let strDate =`${currentDate.getDate() } ${currentDate.toLocaleDateString('ru-RU', {month: 'long'})} ${currentDate.getFullYear()} - это ${ currentDate.toLocaleDateString('ru-RU', {weekday: 'long'})}  Время : ${currentDate.getHours()} :${currentDate.getMinutes()}: ${currentDate.getSeconds()}`
console.log(strDate);