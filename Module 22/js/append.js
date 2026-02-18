const mainContainer = document.getElementById('main-container')
console.log(mainContainer);

// create child
const placeSection = document.createElement('section');

//create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places i want to visit';
placeSection.appendChild(h1);


// append places section
mainContainer.appendChild(placeSection);