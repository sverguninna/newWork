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