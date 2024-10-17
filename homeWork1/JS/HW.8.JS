let z = [1,2,3]

Array.prototype.forEach2 = function (callback) {
     let arr = this
	 for (let i = 0; i < arr.length; i++) {
		callback(arr, arr[i], i)
	 }
}


const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
console.log(people.sort( (a, b) => a.age - b.age) );
 // код выше должен вывеcти =>
 // [
 //  { name: 'Олег', age: 7 },
 //  { name: 'Анна', age: 17 },
 //  { name: 'Глеб', age: 29 },
 //  { name: 'Оксана', age: 47 }
 // ]

 function filter(arr, callback) {
    arrNew = []
    for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      arrNew.push(arr[i])  
    
    }
   } 
   return arrNew
}

 function isPositive(el) {
   return  el > 0
}
console.log(filter([3, -4, 1, 9], isPositive));

function isMale(people) {
    return people.gender === 'male'
}
    const people2 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
 console.log(filter(people2, isMale));


 const timer = (deadline) => {
    const interval = setInterval(() => {
       console.log(new Date());
    }, 3000);
 
    setTimeout(() => {
    clearInterval(interval);
       console.log('30 секунд прошло')
    }, deadline * 1000)
 };
 
 timer(30);


 function delayForSecond(callback) {
     setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))

