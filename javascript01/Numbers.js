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

let x9 = 0xff;
console.log("Hexadecimal :", x9);

let x10 = 32;
console.log("Decimals of 32",x10.toString(36));
console.log(x10.toString(32));
console.log(x10.toString(16));
console.log(x10.toString(12));
console.log(x10.toString(10));
console.log(x10.toString(8));
console.log(x10.toString(4));
console.log(x10.toString(2), '\n');

let x11 = 123;
let y11 = new Number(x11);
console.log(typeof x11);
console.log(typeof y11);
console.log(x11 == y11);
console.log(x11 === y11, '\n');

let x12 = new Number(500);
let y12 = new Number(500);
console.log("java script objects cannoot be compared :",x12 === y12);







