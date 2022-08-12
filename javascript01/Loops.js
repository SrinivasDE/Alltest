const numbers = [45, 4, 9, 16, 25];
for(let i in numbers){
    console.log(numbers[i]);
}
console.log('\n')

const person = {fname:"John", lname:"Doe", age:25};
for(let i in person){
    console.log(`${i} = ${person[i]}`);
}
console.log('\n')


const cars = ["BMW", "Volvo", "Mini"];
for(let i of cars){
    console.log(i)
}
console.log('\n')


for(let i of numbers){
    console.log(i)
}
console.log('\n')


for(let i in numbers){
    console.log(`${i} = ${numbers[i]}`)
}

const str = 'srinivas meesala';

for(let i of str) {
    console.log(i )
}
for(let i in str) {
    console.log(`${i} = ${str[i]}`)
}

console.log(str.split("").reverse().join(''))