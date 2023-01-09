const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const foodEl = document.querySelector('ul');
//  console.log(foodEl);


// const foodPotEl = document.createElement('li');
// foodPotEl.classList.add('item')
// foodPotEl.textContent = 'Potatoes'
// console.log(foodPotEl);



// --------- вариант 1 -------------------

// const el = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const element = ingredients[i];
//   const foodItemEl = document.createElement('li');
//   foodItemEl.classList.add('item')
//   foodItemEl.textContent = ingredients[i]
//   // console.log(foodItemEl);
//  el.push(foodItemEl);
  
// }
// // console.log(...el)

//   foodEl.append(...el) ;
//  console.log(foodEl)

// ---------- вариант 2  ---------------------

// const el = ingredients.map(ingredient =>{
  
//   const foodItemEl = document.createElement('li');
//   foodItemEl.classList.add('item')
//   foodItemEl.textContent = ingredient;
//   // console.log(foodItemEl);
//   return foodItemEl;

// });
// // console.log(el);
//   foodEl.append(...el) ;
//  console.log(foodEl);

// ---------- вариант 3  ---------------------

const makeFoodEl = ingredients => {
  return ingredients.map(ingredient =>{
  
    const foodItemEl = document.createElement('li');
    foodItemEl.classList.add('item')
    foodItemEl.textContent = ingredient;
    // console.log(foodItemEl);
    return foodItemEl;
  
  });
};

const el = makeFoodEl(ingredients);
foodEl.append(...el);
console.log(foodEl);