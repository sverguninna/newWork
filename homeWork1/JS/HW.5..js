function findSmaller(a, b ) {
    if (a > b) {
        return b
    }else{
        return a 
    }
}
console.log(findSmaller(4, 8)) 

function checkNumber( n ) {
    if (n % 2 == 0) {
        alert('число четное')
    } else {
        alert("число не четное")
    }
}
checkNumber(3)

function squareNumber( n ) {
    console.log( n ** 2);
}
squareNumber(4)
function squareNumber2 ( n ) {
  return  n ** 2
}

console.log(squareNumber2 (4));

let question = prompt('Сколько вам лет')

function seyHello (age) {
    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if ( age <= 12 && age >= 0 ){
        alert('Привет, друг!')
    }else if(age >= 13 ){
       alert('Добро пожаловать!')
    }
}
seyHello(question)

function squareNumbers (a, b) {
    let result
    if ( isNaN(a) !== true && isNaN(b) !== true) {
        return result = a + b 
    } else {
        alert('Одно или оба значения не являются числом')
    } 
}

console.log(squareNumbers(2, 'fvefv'));



function squareNumber3 ( ) {
    let question = prompt('Введите число')

    if ( isNaN(question) !== true ) {
      result = question**2 
      return `${question} в кубе равняется < ${result}>' `
    } else {
      return result = 'Переданный параметр не является числом'
    } 
}

console.log(squareNumber3());

function getPerimeter () {
    console.log( 2 * Math.PI * this.radius); 
}
function getArea() {
    console.log(Math.PI * this.radius**2);
}
const circle1= {
    radius : 2,
    getPerimeter: getPerimeter ,
    getArea: getArea,
}

const circle2= {
    radius : 3,
    getPerimeter: getPerimeter ,
    getArea: getArea,
}

circle1.getPerimeter()
circle2.getPerimeter()
circle1.getArea()
circle2.getArea()