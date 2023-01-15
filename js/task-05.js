// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");
// console.log(output.textContent)
// console.log(textInput);

// // ----------

// textInput.addEventListener("input", onInputChange);
// textInput.addEventListener('input', onOutput);



// function onInputChange (e) {
//     console.log(e.currentTarget.value)
//      output.textContent = e.currentTarget.value;
     
// };
//  function onOutput (e) {

// console.log(e);
// console.log(output)
// console.log(output.textContent)
//     //  console.log(element.currentTarget.checked);
//     // console.log('input :', output.disabled );
//     //  output.disabled =  !element.currentTarget.value;
//     //  output.textContent = !element.currentTarget.value;
//     // output.textContent = "'Anonymous";
//  }


// -------------------------------------

 const inputEl = document.querySelector("#name-input");
 const outputEl = document.querySelector('#name-output');
 console.log(outputEl.textContent);
 inputEl.addEventListener("input", onInputChange);
  // inputEl.addEventListener('input', onOutput);


function onInputChange(event) {
  outputEl.textContent = event.currentTarget.value;
  // console.log(outputEl);
  console.log(inputEl.value);
};

// function onOutput(event) {
//      if (inputEl.value !== ' ') {
//         outputEl.textContent = inputEl.trim()  | 'Anonymous';
//     }


//  console.log( outputEl.innerText)
// // outputEl.reset();
//  }



// ================================================

