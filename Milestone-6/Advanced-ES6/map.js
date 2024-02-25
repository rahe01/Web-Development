const number = [1, 2, 3, 4];

function double(x) {
    console.log(x);

    return x * 2;
};

const double2 = x => x * 2;



const result = number.map(double);
const result2 = number.map(double2);
const result3 = number.map(x => x * 2);
console.log(result3);

const friend = ['Rahe','ahmed'];

const result4 = friend.map(x => x[2] );

console.log(result4);