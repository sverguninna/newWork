for (let index = 0; index < 2; index++) {
    console.log('ПРИВЕТ');
    
}

for (let index = 1; index <= 5; index++) {
    console.log(index);
    
}

for (let index = 7; index <=22; index++){
    console.log(index);
}

const obj = {
"Коля" : '200',
"Вася" : '300',
"Петя" : '400',
};
for (const key in obj) {
   console.log(`${key}: ${obj[key]}`);
} 

    let n = 1000;
   let res = 0;
   let num = 0
   for (let index = 0; index < n; index++) {
    res = n / 2
    n = res
    num++
    if (res < 50) {
        break
    } 
    console.log(`${ res} ${num}`);
   }

let firstFriday = Number(prompt("Введите дату первой пятницы"));

for (let dayMonth = firstFriday; dayMonth <= 31; dayMonth+=7) {
        console.log(`Сегодня пятница ${dayMonth}-е. Необходимо подготовить отчет.`)
} 



let k = 100;
let res2 = 0;
let iterations = 0
for (let index = 0; index < k; index++) {
 res2 = k - 7
 k = res2
 iterations++
 if (res2 < 0) {
     break
 } 
}
console.log(`${ res2} ${iterations}`);

let months = [" ",'Январь',  'Февраль',  ' Март',   'Апрель',  'Май',  'Июнь', 'Июль', 'Август',  'Сентябр',  'Октябрь', 'Ноябрь',  'Декабрь', ]

for (let index = 1; index <= months.length; index++) {
    console.log(months[index] ,index);
    
}