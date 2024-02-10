const sections = document.querySelectorAll('section');

for(const section of sections){
    console.log(section);
    section.style.border = '2px solid blue';
    section.style.margin = '10px';
    section.style.borderRadius = '20px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightGray' 
}

let placesContainer = document.getElementsByClassName('places-container')
// placesContainer.style.backgroundColor = 'yellow';

placesContainer.classList.add('yellow-bg');