//stampare a video tutti gli elementi nella pagina html
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
//
//
//variables
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];
  const iconsContainer = document.getElementById('icons');
  colors = [
      'blue',
      'orange',
      'purple'
  ];
  const select = document.getElementById('select')
//functions calls 
colorFunction(icons, colors);
iconCreator(icons, iconsContainer);
selectOptions(types(icons), select);
//on milestone click we filter, the page will load with all the types
select.onchange = function(element) {
  const filtered = filter(icons, element.target.value);
  return iconCreator(filtered, iconsContainer)
}
//functions
// creating icons on the HTML(all the types are created)
function iconCreator (array, container) {
    container.innerHTML = '';
    array.forEach((element) => {
        const {name, prefix, color, family} = element;
        //creating my HTML with a template and using destructurated keys
        container.innerHTML += `
            <div>
            <i class="${family} ${prefix}${name}" style = "color : ${color}"></i>
            <div class="title">${name}</div>
            </div>

        `
}); 
}
// filtering for types my icons
function types(array) {
    const types = [];
    
    array.forEach((element)=> {
        // console.log(element.type)
        if(!types.includes(element.type)){
            types.push(element.type);
        }
    });
    return types;
};
//function colors identifier
function colorFunction(array, colors) {
    const myTypes = types(array);
    array.map((element) => {
        const indexType = myTypes.indexOf(element.type);
        // console.log(indexType)
        element.color = colors[indexType];
        return element
    });
}
//select function
function selectOptions(array, select) {
    array.forEach((element) => {
    select.innerHTML +=`<option value="${element}">${element}</option>`
  });
}
//filter function. it works using the types extracted with the function types
function filter(array, type) {
  const filteredArray =array.filter((element) => {    
    if(element.type === type){
     return true; 
    }
    return false;
  });
  //if type is "" means we are selection option so no need to filter the array
  if (type === "")
    return array;

  return filteredArray;
}