let text = `Hello World!`;
console.log(text);

let text1 = `He's often called "Johnny"`;
console.log('Quotes Inside Strings :',text1, '\n');

let text2 =
`The quick
brown fox
jumps over
the 'lazy' dog`;
console.log('Multiline Strings :', text2,'\n');

let firstName = 'Srinivas';
let lastName = 'Meesala';
let text3 = `Welcome ${firstName} ${lastName}!`;
console.log('Variable substitutions :',text3, '\n');

let price = 10;
let VAT = 0.25;

let total = `Total ${price * (1+ VAT)}`;
console.log('expression substitutions :', total);

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2>`
console.log(html);
for(const i of tags){
    console.log(i);
}