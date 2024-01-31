const sentence = 'i am learning web devlopment';


let reverse = '';
for(const letter of sentence){
    reverse = letter+reverse;
}

console.log(reverse);