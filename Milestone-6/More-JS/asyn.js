console.log(1);
console.log(1);
console.log(1);
setTimeout(()=> {
    console.log(2);
},6000)
console.log(1);
console.log(1);
console.log(1);


let num = 0;
const clockid=  setInterval(()=> {
    num++;
    console.log(clockid,num );
},2000)


