const buttonHeading = document.querySelector('.button-heading')
const headingOne = document.querySelector('.heading-one')
console.log(buttonHeading);

buttonHeading.addEventListener('click', ()=>{
        headingOne.classList.toggle('active')
})

const buttonText= document.querySelector('.button-text')
const textTwo = document.querySelector('.text-two')


buttonText.addEventListener('click', ()=>{
    textTwo.style.color = 'blue';
})


const buttonThree = document.querySelector('.button-three')
const headingThree  = document.querySelector('.heading-three ')

buttonThree.addEventListener('click', ()=>{
    headingThree.innerHTML =  'Привет, мир !';
})

const buttonFour  = document.querySelector('.button-four ')
const headingFour  = document.querySelectorAll('.heading-four ')
console.log(headingFour);
buttonFour.addEventListener('click', ()=>{
    headingFour.forEach( el=> {
        el.textContent = 'Измененный текст' })
})


const buttonFive = document.querySelector('.button-five ')
const description = document.querySelectorAll('.description ')

buttonFive.addEventListener('click', ()=>{
    description.forEach( el=> {
        el.textContent = 'Новый текст' })
})



const  buttonAddText = document.querySelector('.button-Add-Text ')

console.log(buttonAddText);
buttonAddText.addEventListener('click', ()=>{
    const  newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP)

})

const description2 = document.querySelectorAll('.description2')
const buttonRemoveText = document.querySelector('.button-remove-Text')
buttonRemoveText.addEventListener('click', ()=>{
    for (let i = 0; i < description2.length; i++) {
        if (description2[i]) {
            description2[i].remove()
            break
        }
        
    }
})