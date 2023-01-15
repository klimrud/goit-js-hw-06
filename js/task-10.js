function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlEl = document.querySelector('#controls');
const inputEl = document.querySelector('input');
const btnEl = document.querySelectorAll('button');

const boxesEl = document.querySelector('#boxes');

//  console.log(controlEl);
// console.log(boxesEl);
// console.log(inputEl);
// console.log(btnEl[0]);


btnEl[0].addEventListener('click' , getAmount);
btnEl[1].addEventListener('click', destroyBoxes)

function getAmount() {
  let amount = +inputEl.value;
  createBoxes(amount);

}
console.log(inputEl.value)

 function createBoxes(amount) {
     const boxesUp = [];
  
   console.log(boxesUp)
// boxesEl.textContent = [getRandomHexColor()];
   const basicSize = 30;

   for (let i = 0; i < amount; i+=1) {
    const size = basicSize + i * 10;
   

     const div = document.createElement('div');
     
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${[getRandomHexColor()]}`;
    boxesUp.push(div);
  
   }
  boxesEl.append(...boxesUp);
  console.log(boxesEl);

}
// console.log(boxesUp);


function destroyBoxes() {
    boxesEl.textContent = '';

}

