
// -------------------------------------

 const inputEl = document.querySelector("#name-input");
 const outputEl = document.querySelector('#name-output');
//  console.log(outputEl.textContent);
 inputEl.addEventListener("input", onInputChange);



function onInputChange(event) {
  outputEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous'
    // console.log(outputEl);
  // console.log(inputEl.value);
 
};

