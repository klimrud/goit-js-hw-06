const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// -------вариант 1------
// const galleryItemEl = document.createElement('li')
// galleryItemEl.classList.add('item') 
// // galleryItemEl.insertAdjacentHTML.add('')
// // console.log(galleryItemEl)

// const imageEl = document.createElement('img');
// // imageEl.url = 
// // imageEl.setAttribute('alt', value);
// // console.log(imageEl);

// galleryItemEl.appendChild(imageEl);




// const galleryEl = document.querySelector('ul');
// //  console.log(galleryEl);


// // const foodPotEl = document.createElement('li');
// // foodPotEl.classList.add('item')
// // foodPotEl.textContent = 'Potatoes'
// // console.log(foodPotEl);



// // --------- вариант 1 -------------------

//  const el = [];

//  for (let i = 0; i < images.length; i += 1) {
//    const imag = images[i];
//    const galleryItemEl = document.createElement('li')
//    galleryItemEl.classList.add('item') 
//    const imageEl = document.createElement('img');

//   //  galleryItemEl.insertAdjacentHTML('afterbegin', imageEl)

//    imageEl.setAttribute('url', images[i].url);
//     //  imageEl.url = images[i].url;
//    imageEl.setAttribute('alt', images[i].alt);
//     // imageEl.alt = images[i].alt;
//      galleryItemEl.appendChild(imageEl);
   


//   el.push(galleryItemEl);
  
//  }

// //  console.log(images[0])
// //  console.log(images[0].alt)
// //  console.log(...el)

//    galleryEl.append(...el) ;
//   // galleryEl.insertAdjacentHTML('afterbegin', el)
//   console.log(galleryEl)


// ------вариант 2 ----


const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);
const imageEl = images.map(image => {
  return `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"/>`
}).join("");
// console.log(imageEl);
galleryEl.insertAdjacentHTML("beforeend", imageEl);