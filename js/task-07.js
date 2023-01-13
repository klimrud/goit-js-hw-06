const inputaControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(inputaControlEl);
inputaControlEl.addEventListener( 'click', onInputChange);

function onInputChange () {
    console.log(inputaControlEl);
}


function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
};

document.addEventListener("mouseup", onMouseUp);








// ======================================


// let sliderRect = slider.getBoundingClientRect();

// let thumb = document.querySelector(".thumb");
// thumb.onmousedown = function(event) { // захват бегунка слайдера

//     let thumbRect = thumb.getBoundingClientRect();
//     let shiftX = event.pageX - thumbRect.x;

//     // функция, реализующая движение бегунка слайдера
//     function onMouseMove(event) {
//         let x = event.pageX - sliderRect.x - shiftX;
//         thumb.style.left = x + "px";
//     }

//     document.addEventListener("mousemove", onMouseMove);

//     // функция, реализующая отпускание бегунка слайдера
//     function onMouseUp() {
//         document.removeEventListener("mousemove", onMouseMove);
//         document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mouseup", onMouseUp);
// };

// let sliderRect = slider.getBoundingClientRect();

// let inputEl = document.querySelector("#font-size-control");
// inputEl.onmousedown = function(event) { // захват бегунка слайдера

//     let inputElRect = inputEl.getBoundingClientRect();
//     let shiftX = event.pageX - inputElRect.x;

//     // функция, реализующая движение бегунка слайдера
//     function onMouseMove(event) {
//         let x = event.pageX - sliderRect.x - shiftX;
//         inputEl.style.left = x + "px";
//     }

//     document.addEventListener("mousemove", onMouseMove);

//     // функция, реализующая отпускание бегунка слайдера
//     function onMouseUp() {
//         document.removeEventListener("mousemove", onMouseMove);
//         document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mouseup", onMouseUp);
// };