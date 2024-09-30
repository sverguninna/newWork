const buttonGuessNumber = document.getElementById('game1')
console.log(guessNumber);
buttonGuessNumber.addEventListener('click', guessNumber )

function guessNumber(){
    let randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber);
    let userNumber = prompt('Введите число')
    let result = false 

   while (result === false ) { 

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

let a = ()=>{return Math.floor(Math.random()*10)+1  }
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

