const formEl = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');
 const btnEl = document.querySelector('button');
// const passwordEl = document.querySelector('');

// console.log(formEl);
// console.log(inputEl);
// console.log(inputEl[0]);
// console.log(inputEl[1]);
// console.log(btnEl);


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // // console.log('fff')
     const formElements = event.currentTarget.elements;
    // console.log('Name:', formElements.email.value); 
    // console.log('Password:', formElements.password.value);
   
const formData = new FormData(event.currentTarget);
 formData.forEach((x,y) => {
    // console.log('x' , x);
if (x === '') { 
    alert("Всі поля повинні бути заповнені.")
    console.log(alert);
    } 
   
    // console.log('y' , y);
 })
 console.log('Name:', formElements.email.value);
console.log('Password:', formElements.password.value);
 formEl.reset();
}

// console.log(formEl.reset)
 


