/* let arr = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 10) {
        break
    } 
  console.log(arr[index]);
}

let arr2 = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 4) {
    console.log(i);
  }
    
}

let arr3 =[1, 3, 5, 10, 20];

console.log(arr3.join(' '));

let arr4 = []; 
for (let i = 0; i < 4; i++) {
    arr4[i]=[]
    for (let j = 0; j < 4; j++) {
       arr4[i].push(1)
    }
}
console.log(arr4);

let arr5 = [1, 1, 1] 
for (let i = 0; i < 3; i++) {
    arr5.push(2)
    
}
console.log(arr5); */

/* let arr6 = [9, 8, 7, 'a', 6, 5];
const arr6filter = arr6.filter(el =>typeof el !== 'string')
console.log(arr6filter);

let arr7 = [9, 8, 7, 6, 5]
let question= +prompt('Угадайте число')
if (arr7.includes(question) === true) {
    alert('Угодал')
} else {
    alert("НЕ угодал")
} */

let arr8 ='abcdef'.split('').reverse().join('')
console.log(arr8);

let arr9= [[1, 2, 3],[4, 5, 6]]
let arrNew = []
for (let i = 0; i < arr9.length; i++) {
   arrNew.push(...arr9[i])
    
}
console.log(arrNew);

let arr10 =[]
for (let i = 0; i < 10; i++) {
    arr10.push(Math.floor(Math.random()* 10)+1)    
   
}
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i+1]) {
        console.log( arr10[i]+ arr10[i+1]);
    }
    
}

let arr11 = [2, 4, 6]

let arr11New = arr11.map(el => el**2)
console.log(arr11New);

function getLength(arr) {
   return arr.map(el => el.length)
}
console.log(getLength(['привет', '! !']));

function negativNum( arr) {
    return arr.filter(el => el < 0)
}
console.log(negativNum([1, 4, -5, 6 , -9]));

let arr14 =[]
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random()* 10)+1)    
}
console.log(arr14);
let arr14New = arr14.filter(el => el % 2 === 0 )
console.log(arr14New);

let arr15 =[]
for (let i = 0; i < 5; i++) {
    arr15.push(Math.floor(Math.random()* 10)+1)    
}
const sumArr15 = arr15.reduce((total, num)=> total + num, 0)

console.log(sumArr15);

