let x = 123;
console.log(typeof x);
console.log(typeof x.toString());
console.log(typeof x);
console.log((123).toString());
console.log((100+23).toString(), '\n');

let x1 = 9.656
console.log(x1.toExponential(5), '\n');

console.log(x1.toFixed(2));
let y1 = 9.654;
console.log(y1.toFixed(2), '\n');

let x2 = 10;
console.log(x2.valueOf());
console.log((x2 + 20).valueOf(), '\n');

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"), '\n');

let date = new Date('1970-01-01');
console.log(date)
console.log(Number(date), '\n')

let date1 = new Date('1970-01-02'); 
console.log(date1)
console.log(Number(date1), '\n');

console.log(parseInt('-10'));
console.log(parseInt('-10.11'));
console.log(parseInt('10.21'));
console.log(parseInt('.11'));
console.log(parseInt('0.11'));
console.log(parseInt('.11'), '\n');

console.log(parseInt('20 30'));
console.log(parseInt('10 months'));
console.log(parseInt('10 days'));
console.log(parseInt('10 years'));
console.log(parseInt('months 10'), '\n');

console.log(parseFloat('10.33'));
console.log(parseFloat('10 days'));



