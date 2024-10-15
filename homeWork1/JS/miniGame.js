const buttonGuessNumber = document.getElementById('game1')
console.log(guessNumber);
buttonGuessNumber.addEventListener('click', guessNumber )

function guessNumber(){
    let randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber);
    let userNumber = prompt('Введите число')
    let result = false 

   while (!result) { 

    if (userNumber > randomNumber ) {
        userNumber = prompt ('число большое чем нужно, попробуй заново')
        result =  false
     } else if ( userNumber < randomNumber ) {
         userNumber = prompt ('число меньше чем нужно , попробуй заново')
         result = false
     }else {
         alert('Молодец, верно!!!')
        result = true
    }
   }
}

const buttonSolveExample = document.getElementById('game2')
console.log(buttonSolveExample);
buttonSolveExample.addEventListener('click', SolverExample )

let a = ()=>{return Math.floor(Math.random()*10)+1 }
let b = ()=>{return Math.floor(Math.random()*10)+1}


function SolverExample() {
   let trueAnswer = 0 
   let falseAnswer = 0 
   let question = ''

   while (question !== 0 ) {
    let Example = generateExample(a(), b())
      question = Number(prompt(`${Example.example}`))
    if (question === Example.answer) {
        alert('Молодец')
        trueAnswer++
    }else if(question === 0 ){ 
        break
   }
    else if(question !== Example.answer ){
       alert("Не верно ")
     falseAnswer++ 
    } }
    alert(`Правильных ответов: ${trueAnswer} , не правильных ${falseAnswer}`)
}
function generateExample(a , b ){
     const boxExample = [
     {
     example: `${a} + ${b}`,
     answer: a + b }, 
     { 
    example: `${a} - ${b}`,
    answer: a - b }, 
     {
    example: `${a} * ${b}`,
    answer: a * b },
     {
    example: `${a} / ${b}`,
    answer: a / b }, ];

 let randomIndex = Math.floor(Math.random() * (boxExample.length - 1));
 let Example = boxExample[randomIndex];
 return Example }

 const buttonTurnText = document.getElementById('game3')
 console.log(buttonTurnText);

 buttonTurnText.addEventListener('click', TurnText)

 function TurnText() {
 let question = prompt('Введите текст');
 let str = question.split('').reverse().join('')
 alert(str);  
}


const buttonQuiz = document.getElementById('game4')
buttonQuiz.addEventListener('click', Quiz)

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function Quiz() {
    let trueAnswer = 0;
    quiz.forEach(element => { 
       let answer = prompt(`${element.question} : ${element.options.join('; ')}`)
       if (+answer === element.correctAnswer || element.options[1].toLowerCase().includes(answer.toLowerCase())) {
        trueAnswer++
       }
    });
    alert(`Правильных ответов ${trueAnswer}`)
}


const buttonGameСomputer = document.getElementById('game5')
buttonGameСomputer.addEventListener('click', gameComputer )

function gameComputer() {
    const arrGame = ['Камень','Hожници','Бумага'];
    let index = Math.ceil( Math.random() * ( arrGame.length - 1 - 0) + 0 )
    let compOp = arrGame[index]
    let usersOption = prompt("Выберети варианты ответа (Камень, Ножницы ,Бумага)")
    alert(`Пользователь выбрал ${usersOption} компьютер выбрал ${compOp}. Результат ${variantsVictoryAndLose[compOp][usersOption]}`)
        

}
 
variantsVictoryAndLose = {
    'Камень': {
        'Камень': 'Ничья',
        'Ножницы': 'Проиграли',
        'Бумага': 'Выграли'
    },
    'Ножницы': {
        'Камень': 'Выграли',
        'Ножницы': 'Ничья',
        'Бумага': 'Проиграли'
    },
    'Бумага': {
        'Камень': 'Проиграли',
        'Ножницы': 'Выграли',
        'Бумага': 'Ничья'
    }
}

console.log(variantsVictoryAndLose['Ножницы'])
 
