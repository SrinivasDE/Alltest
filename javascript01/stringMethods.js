let str = 'abcdefghijklmnopqrstuvwxyz';
let len = str.length;
console.log("Q1 :",len)

let str1 = 'Apple, Banana, Kiwi'
let res1 = str1.slice(7, 13);
console.log("Q2.1 :",res1);

let res2 = str1.slice(-12, -6);
console.log("Q2.2 :", res2);
console.log("Q2.3 :", str1.slice(7));
console.log("Q2.4 :", str1.slice(-12))

console.log("Q3 => Q3.3 :", str1.substring(7)) // negitive index is not working in this method
console.log("Q4 => Q3.4 :", str1.substr(-12)) 


let str2 = 'Please visit Microsoft and Microsoft';
let newStr2 = str2.replace('Microsoft', 'W3Schools')
console.log("Q5 :", newStr2);
let str_2 = 'Please visit microsoft and Microsoft';
let newStr3 = str_2.replace(/MICROsofT/i, "W3Schools");
console.log("Q6 :", newStr3);

let str_2_1 = 'Please visit Microsoft and Microsoft';
let newStr_3 = str_2_1.replace(/Microsoft/g, "W3Schools");
console.log("Q7 :", newStr_3);
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())


let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
let text4 = "Hello".concat(" ", "World!")
console.log("Q 10 :", text3);
console.log("Q 10.1 :", text4);

let text_1 = "      Hello World!      ";
console.log("Q11 :", text1.trim());

let text12 = "5";
console.log("Q12",text12.padStart(4,"x"));
console.log("Q12.1",text12.padEnd(4,"x"));

let numb = 125;
let text13 = numb.toString();
console.log("Q13",text13.padEnd(4,"x"));

let text14 = "Hello World";
console.log("Q14: ", text14.charAt(0));
text14[0] = 'A'
console.log(text14);

console.log('Q15 :', text14.split(" "));
console.log('Q15.1 :', text14.split(""));


let text16 = "Hello, World"
console.log('Q15 :', text14.split(" ,"));

let str17 = "Please locate where 'locate' occurs!";
console.log("Q17 :",str17.indexOf("locate"))
console.log("first occurence :",str17.slice(7,13));
console.log("Q17.1 :",str17.lastIndexOf("locate"));
console.log("last occurence :",str17.slice(21, 27));

console.log("Q18 :", str17.indexOf("locate", 15));
console.log("Q18.1 :", str17.lastIndexOf("locate", 15));

console.log("Q19 :", str17.search("locate"))

let text20 = "The rain in SPAIN stays mainly in the plain";
console.log("Q20 :", text20.match(/ain/g))
console.log(text20.search(/AIN/i))
console.log(text20.search('ain'))

console.log("Q20.1 :", text20.match(/ain/ig));

let text21 = "Hello world, welcome to the universe.";
console.log("Q21 :", text21.includes('world') && text21.search('world'));
console.log("Q21.1 :", text21.includes('world', 12) && text21.search('world'));

let text22 = "Hello world, welcome to the universe.";
console.log("Q22 :", text22.startsWith('Hello') && text22.toUpperCase());

let text23 = text22.startsWith('Hello') && text22.split(' ');
console.log("Q23.1 :",text23);

text23[0] = text23[0].toUpperCase() ;
console.log("Q23.2 :",text23);

text23 = text23.join(' ');
console.log("Q23.3 :",text23);


let text24 = "John Doe";
console.log("Q24.1 :", text24.endsWith("Doe"));
console.log("Q24.2 :", text24.endsWith("D"));
console.log("Q24.3 :", text24.endsWith("Doe", text24.length));

