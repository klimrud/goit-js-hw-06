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
// galleryItemEl.classList.add('gallery__item') 
// //  galleryItemEl.innerHTML =  '<li></li>'
// //  console.log(galleryItemEl)

// const imageEl = document.createElement('img');
// imageEl.classList.add('gallery__img');
// imageEl.src = images[0].url;
// imageEl.alt= images[0].alt;
// //  imageEl.innerHTML =` <img class="gallery__img" src="${image.url}" alt="${image.alt}`
// //  console.log(imageEl.innerHTML);

//    galleryItemEl.appendChild(imageEl);



  //  const galleryEl = document.querySelector('ul');
// //  galleryEl.innerHTML = '<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"/>'
//    console.log(galleryEl);
// //  galleryEl.insertAdjacentHTML("beforeend", '');





// const title = document.querySelector("p");
// // title.innerHTML = 'New and <span class="accent">improved</span> title';
// title.insertAdjacentHTML('beforeend', ' <span class="accent">improved</span>')
// console.log(title)





// // --------- вариант 1 -------------------

//  const el = [];
//  const galleryEl = document.querySelector('ul');
//  for (let i = 0; i < images.length; i += 1) {
//    const imag = images[i];
//    const galleryItemEl = document.createElement('li')
//    galleryItemEl.classList.add('gallery__item') 
//    const imageEl = document.createElement('img');
//    imageEl.classList.add('gallery__img');
//    imageEl.style.margin = "50px";
//   //  imageEl.setAttribute('src', images[i].url);
//       imageEl.src = images[i].url;
//   //  imageEl.setAttribute('alt', images[i].alt);
//      imageEl.alt = images[i].alt;
//      imageEl.width = 400;

//      galleryItemEl.appendChild(imageEl);
   
//    el.push(galleryItemEl);

//  }

// //  console.log(images[0])
// //  console.log(images[0].alt)
//  console.log(...el)

//    galleryEl.append(...el) ;
//   console.log(galleryEl)




// ------вариант 2 ----


 const makeGalleryMarkup = image => {
  
    return `<li class="gallery__item">
               <img class="gallery__img" 
                    src="${image.url}" 
                    alt="${image.alt}" 
                    width = "400"/>
            </li> `
    };
// console.log(makeGalleryMarkup)

const galleryEl = document.querySelector('ul');  
 console.log(galleryEl) 
 
const makeGallery = images.map(makeGalleryMarkup).join('');
// console.log(makeGallery)

 galleryEl.insertAdjacentHTML('beforeend', makeGallery)
  // console.log(makeGallery)




// ------вариант 3----


//  const galleryEl = document.querySelector('ul');
//  console.log(galleryEl);
//  const imageEl = images.map(image => {
  
//   return `<li class="gallery__item">
//              <img class="gallery__img" 
//                   src="${image.url}" 
//                   alt="${image.alt}" 
//                   width = "400"/>
//           </li> `
//  }).join("");

 
// // // console.log(imageEl);
//   galleryEl.insertAdjacentHTML("beforeend", imageEl);


// ------ 4 -----

// const ulEl = document.querySelector('ul');
//   const imageEl = images.reduce(
// (acc, image) => acc += `<img src = "${image.url}" alt = "${image.alt}" width = "400" />`,
// ""
// );
// ulEl.innerHTML = imageEl;
// // imageEl.forEach ( imag =>  {
// //   ul.insertAdjacentHTML(
// //     'beforeend' ,
// //     `<li><img src = " ${images.url} " alt = " ${ images.alt } " width = "400"/></li>` ,
// //   ) ;
// // } ) ;
// console.log(ulEl)