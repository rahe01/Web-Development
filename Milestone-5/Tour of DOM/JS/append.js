const placesLIsts = document.getElementById('places-list');

const li = document.createElement('li');
li.innerText=("Cox's Bazar");

placesLIsts.appendChild (li);

const mainContent = document.getElementById('main-content');
console.log(mainContent);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
const ul = document.createElement('ul');


section.appendChild(h1)

mainContent.appendChild(section)


const sectionDress = document.createElement('section');

sectionDress.innerHTML = `

<h1>My dress </h1>







`

mainContent.appendChild(sectionDress)
