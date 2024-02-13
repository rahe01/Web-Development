// function play(){
//     const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');

//   const playGroundSection = document.getElementById('play-ground');

//   playGroundSection.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlpha = document.getElementById('current-alphabet');
    currentAlpha.innerText = alphabet;
    setBgByid(alphabet);
}

function play(){
    hideElementByID('home-screen');
    showElementByid('play-ground');
    continueGame();
}

