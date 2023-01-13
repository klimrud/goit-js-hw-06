const  inputEl = document.querySelector('#validation-input');

const lengthEl = Number(inputEl.dataset.length);
// console.log(lengthEl)

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
    inputEl.classList.add( 'invalid') ; 
    
 if (e.currentTarget.value.length === lengthEl ){
    inputEl.classList.replace( 'invalid','valid') ;
    // console.log(inputEl);
 } 
//   console.log(inputEl);
}

