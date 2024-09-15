let question = prompt('введите пароль');
let password = '1324'
if (question === password) {
    alert('Пароль введен верно')
}else{
    alert('Пароль введен неправильно')
}

let c = -3;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
} 

let e = 99;
let d = 100;

if (e > 100 || d > 100) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

let a = '2';
let b = '3';
alert(Number(a)+ Number(b))
 
var monthNumber = 4;

switch (monthNumber) {
   case 12:
    case 1:
    case 2:
      console.log('Зима');
      break;
   case 3:
    case 4:
    case 5:
      console.log('Весна');
      break;
   case 6: 
   case 7: 
   case 8:
        console.log('Лето');
        break;
   case 9:
   case 10:
   case 11:
            console.log('Осень');
  break;
   default:
      console.log('Нет такого месяца ');
}

let question2 = + prompt('Введите число');
if (question2 % 2 === 0) {
    console.log('число четное');
} else {
    console.log('Число не четное');
}
