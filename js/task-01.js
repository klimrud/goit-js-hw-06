const navEl = document.querySelector('ul');
// console.log('Categories:', categories);
// console.log('navEl:',navEl);
// console.log(navEl.children)

//  const childNodes = navEl.childNodes;
//  console.log(childNodes);
// console.log(navEl.forEach(element => {'.item'
    
// }););

const navCategEl = document.querySelectorAll('.item');
// console.log('Categ:', navCategEl);

//  console.log(navCategEl.textContent)


// const navItemEl = document.querySelectorAll('.item h2');
// console.log('navItemEl', navItemEl);
// console.log('Categories:' , navItemEl.textContent)

// !!!!!!!!
const navItemLegth = navCategEl.length;
console.log('Number of categories:' ,navItemLegth);

// !!!!!!! первый вариант
// const navTitleEl = document.querySelector('h2');
// console.log('Categories:', navTitleEl.textContent);


// const navTitlesEl = document.querySelectorAll('h2');
// console.log(navTitlesEl)
// console.log('Categories:', navTitlesEl.textContent )
// console.log('navTitleEl',navTitleEl)
// const elements = [...categories.children];
// console.log(elements)

// elements.forEach((element) =>{
//     console.log( element.children[1].children.length)
// })
 


const navAnimalsEl = document.querySelectorAll('.item ul');
// console.log('Elements:' ,navAnimalsEl[0].children.length);
// console.log('Elements:' ,navAnimalsEl[1].children.length);
// console.log('Elements:' ,navAnimalsEl[2].children.length);


const navTitlesEl = document.querySelectorAll('li.item h2');


console.log('Categories:',navTitlesEl[0].textContent);
console.log('Elements:' ,navAnimalsEl[0].children.length);


console.log('Categories:',navTitlesEl[1].textContent);
console.log('Elements:' ,navAnimalsEl[1].children.length);

console.log('Categories:',navTitlesEl[2].textContent);
console.log('Elements:' ,navAnimalsEl[2].children.length);

