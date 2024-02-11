console.log("js");


function makeRed (){
    document.body.style.backgroundColor ='red';
}


const blueBtn = document.getElementById('make-blue');
blueBtn.onclick = makeblue;
function makeblue(){
    document.body.style.backgroundColor ='blue';
}


const purpleBg= document.getElementById('make-purple');
        purpleBg.onclick = function makePurple(){
            document.body.style.backgroundColor= 'purple'
        }
       

        const pinkBg = document.getElementById('make-pink');
        pinkBg.addEventListener('click',pinkMake)
        function pinkMake(){
            document.body.style.backgroundColor = 'pink'
        }


        
        const greenId = document.getElementById('make-green');
        greenId.addEventListener('click', function(){document.body.style.backgroundColor = 'green'})
        