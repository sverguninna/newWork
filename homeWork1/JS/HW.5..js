function findSmaller(a, b ) {
    if (a > b) {
        return b
    } else if ( a < b ) {
        return a
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
  return  result =  n ** 2
}
squareNumber2 (4)
console.log(result);

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
    } else if ( isNaN(a) === true || isNaN(b) === true) {
        alert('Одно или оба значения не являются числом')
    } 
}

console.log(squareNumbers(2, 'fvefv'));



function squareNumber3 ( ) {
    let question = prompt('Введите число')
    let result 
    if ( isNaN(question) !== true ) {
      result = question**2 
      return `${question} в кубе равняется < ${result}>' `
    } else if ( isNaN(question) === true) {
      return result = 'Переданный параметр не является числом'
    } 
}

console.log(squareNumber3());

function getPerimeter () {
    console.log( 2 * Math.PI * this.radius); 
}

const circle1= {
    radius : 2,
    getPerimeter: getPerimeter ,
}

const circle2= {
    radius : 3,
    getPerimeter: getPerimeter ,
}

circle1.getPerimeter()
circle2.getPerimeter()