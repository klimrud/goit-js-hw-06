function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color')
const btnChangeColorEl = document.querySelector('.change-color')


// console.log(widgetEl);
//  console.log(colorEl);
// console.log(btnChangeColorEl);

btnChangeColorEl.addEventListener('click', onChangeColor);

function onChangeColor (event) {
  // console.log('click')
  document.body.style.backgroundColor = [getRandomHexColor()];
 colorEl.textContent = [getRandomHexColor()];
 console.log('span.color:',colorEl.textContent);
  // console.log(document.body.style.backgroundColor);
  // console.log(getRandomHexColor(16777215));
}
