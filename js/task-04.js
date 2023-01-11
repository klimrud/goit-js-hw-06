var counterValue = 0;

const valueEl = document.getElementById('value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn.dataset.action); // "decrement"

const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn.dataset.action); // "increment"


decrementBtn.addEventListener('click' , () => {
     counterValue += -1;  
 valueEl.innerHTML = counterValue;  
});

incrementBtn.addEventListener('click' , () => {
    counterValue += 1;
 valueEl.innerHTML = counterValue;  
});


// ------------- варивнт 2 -----

// decrementBtn.addEventListener('click' , (event) => {
//     counterValue -= 1;
//  console.log('kl');
//  valueEl.innerHTML = counterValue ; 
// //  valueEl.removeEventListener('click' , onButtonClick);
 
//  });

// incrementBtn.addEventListener('click' , (event) => {
//     counterValue += 1
//     valueEl.innerHTML = counterValue; 
//      console.log('klq');

//      console.log(valueEl)
//     // valueEl.addEventListener('click', onButtonClick);
// });

// console.log(valueEl)

// function onButtonClick() {
//     console.log('clicks')
// }
