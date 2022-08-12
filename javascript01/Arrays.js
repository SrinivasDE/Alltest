const cars = ['Maruthi', 'BMW', 'Volvo', 'Jeep'];
console.log(cars[0]);
cars[0] = 'Alto';
console.log(cars);
console.log(typeof cars, '\n');

let x = {}
cars.map((item,index) => {
    x[index] = item;
})
console.log(x, '\n');

console.log(cars.length)
console.log(cars.sort(), '\n');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach((i) => {
    console.log(i);
})

const arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
arr.forEach((i) => {
    sum += i
})
console.log(sum);

const num = [10,11,12,13,15];
num.forEach((item, index, arr) => {
    num[index] = item*10;
})
console.log(num);
console.log(Array.isArray(num),'\n');
console.log(fruits instanceof Array,'\n');

const ff = fruits.toString()
console.log(ff[0],'\n');

console.log(fruits.join(' * '), '\n')

console.log(fruits);
fruits.pop();
console.log(fruits,'\n');
fruits.push('kiwi');
console.log(fruits);
fruits.push(cars);
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('Lemon');
console.log(fruits);
delete fruits[0];
console.log(fruits,'\n');

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myBoys.concat(myGirls);
console.log(myChildren,'\n')

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);
console.log(arr4,'\n');

const arr11 = ["Emil", "Tobias", "Linus"];
const myChildren1 = arr1.concat("Peter");
console.log(myChildren1,'\n');

let xx = ' Slice ';
let yy = 'Method '
let xx1 = xx.padStart(40, '*');
let xx2 = yy.padEnd(40, '*');
const xxx = xx1.concat(xx2)
console.log(xxx, '\n');

const fruitz = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitz)
fruitz.splice(2,0,'Lemon', 'Kiwi');
console.log(fruitz)
fruitz.splice(2,2,'Grape')
console.log(fruitz)
fruitz.splice(1,1);
console.log(fruitz)
const citrus = fruitz.slice(1);
console.log(citrus);
console.log(fruitz)
const citrus1 = fruitz.slice(1,3);
console.log(citrus1);
console.log(fruitz)
const citrus2 = fruitz.slice(3);
console.log(citrus2,'\n');

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2);
console.log(fruits2.sort());
console.log(fruits2.reverse(),'\n');
const a = 'Banana';
console.log(a);
console.log(a.split('').reverse().join(''),'\n');

const points = [40, 100, 1, 5, 25, 10];
console.log(points);
const p = points.sort((a,b) => {
    return a-b;
})
console.log(p);
console.log(Math.max.apply(null, points))
console.log(Math.min.apply(null, points),'\n')


const cars1 = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars1.sort((a,b) => {
    return (a.year-b.year)
  }), '\n');


const numbers = [45, 4, 9, 16, 25];
const map = numbers.map((value, index, arr) => {
    return value*2;
});
console.log(map);
const filter = numbers.filter((value, index, arr) => {
    return value > 18;
});
console.log(filter);
const reduce = numbers.reduce((total, value, index, arr) => {
    return total + value;
})
console.log(reduce);
const reduce1 = numbers.reduce((total, value, index, arr) => {
    return total + value;
}, 100)
console.log(reduce1, '\n');

const every = numbers.every((value, index, arr) => {
    return value > 18;
})
console.log(every);
const every1 = numbers.every((value, index, arr) => {
    return value < 18;
})
console.log(every1);
const some = numbers.some((value, index, arr) => {
    return value > 18;
})
console.log(some);

const fruits3 = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits3);
let position = fruits.indexOf('Apple') + 1;
console.log("apple position :",position, '\n');

const numbers1 = [4, 9, 16, 25, 29];
console.log(numbers1)
const find = numbers1.find((value) => {
    return value > 18
})
console.log(find);
const findindex = numbers1.findIndex((value) => {
    return value > 18
})
console.log(findindex,'\n');

const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11.includes('Mango'));