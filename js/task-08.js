const formEl = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');
 const btnEl = document.querySelector('button');
// const passwordEl = document.querySelector('');


// console.log(formEl);
// console.log(inputEl);
// console.log(inputEl[0]);
// console.log(inputEl[1]);
// console.log(btnEl);


// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     // // console.log('fff')
//      const formElements = event.currentTarget.elements;
 
// const formData = new FormData(event.currentTarget);
//  formData.forEach((x,y) => {
//     // console.log('x' , x);
// if (x === '') { 
//       const message = ("Всі поля повинні бути заповнені.")
//     return  alert(message);  
     
//     } 
//    // console.log('y' , y);
//  })
//  console.log('Name:', formElements.email.value);
// console.log('Password:', formElements.password.value);
//  formEl.reset();

// }

// console.log(formEl.reset)


// =========================================

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
     const {elements : { email, password }
} = event.currentTarget;
 

if (email.value === '' || password.value === '') { 
   const message = ("Всі поля повинні бути заповнені.")
    return  alert(message);  
    } 

 console.log('Name:', email.value);
 console.log('Password:', password.value);
 event.currentTarget.reset();

}



