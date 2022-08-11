let x = 123e5;
let y = 123e-5;
console.log(x);
console.log(y, '\n');


let x1 = 999999999999999;   // x will be 999999999999999
let y1 = 9999999999999999;  // y will be 10000000000000000

console.log(x1);
console.log(y1, '\n');

let x2 = '20';
let y2 = '10';
console.log(x2+y2);
console.log(x2-y2);
console.log(x2/y2,'\n');


let x3 = '20';
let y3 = 10;
console.log(x3+y3,'\n')

let x4 = 20;
let y4 = 10;
let z4 = '30';
let res4 = x4+y4+z4;
let res4_1 = 'The Result is ' + x4 + y4 + z4;
console.log(res4);
console.log(res4_1);

let x5 = 5 / '10';
console.log(x5, '\n') 

let x6 = 10/'aa';
console.log(x6)
console.log(isNaN(x6), '\n');

let x7 = NaN;
console.log(x7 + x4);
console.log(x7 + x3);
console.log(typeof NaN, '\n');

let x8 = 2/0;
let y8 = -2/0;
console.log(x8);
console.log(y8, '\n');



