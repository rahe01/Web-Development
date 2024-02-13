function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function showElementByid(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden')
}


function setBgByid(elementID){
    const elements = document.getElementById(elementID);
    elements.classList.add('bg-orange-400');
    
}



function getRandomAlphabet(){
    const abcdString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = abcdString.split('');

    const randomNumber = Math.random()*25;
    const indeex = Math.round(randomNumber);
    
    const alpha = alphabet[indeex];
    return alpha;
}