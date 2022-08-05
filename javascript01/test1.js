//1 Reverse a given string using JavaScript?       5Marks
// string="Full Stack Tutorials"


// write your code here:

let str = 'Full Stack Tutorials';
var reverse = '';
for(i=str.length; i=>0; i--){
    reverse = reverse + str[i];
}
console.log(reverse);






// 2  Find the sum of all elements/numbers of a given array?   5Marks

// arr = [1, 2, 5, 10, 20];

// write your code here:

let arr = [1,2,5,10,20];

var sum = 0;
for(i=1; i>=arr.length; i++){
    sum = sum + arr[i]
}
console.log(sum);




// 3  How to convert an Object {} into an Array [] in JavaScript?      10Marks

// obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// write your code here:

let obj = {id:'1', name:'Test user', age:'25', profession:'Developer'};
let array = [];
for(i in obj.entries){
    array.push(i.key);
    array.push(i.value);
} 

console.log(array);




// 4 How to convert an Array [] to Object {} in JavaScript?
// arr = ["1", "Test User", "25", "Developer"];             10Marks

// write your code here:


let arr4 = ['1', 'Test User', '25', "Developer"];
let obj4 = {};
arr4.map((i, index) => {
    
    // return ()
})






// 5 Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.       30 Marks
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:

// Input: x = wow
// Output: true
// Explanation: wow reads as wow from left to right and from right to left..

// write your code here:

let x = 121;
const y = 121;

let res = 0;

while(x>0) {
    x = x%10;
    res = (res * 10)+x;
    x = x//10;
}
if (y===res) {
    console.log('it is pallindrome');
}else{
    console.log('it is not a pallindrome');
}







// 6 Merge the two lists in a one sorted list.       15Marks

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// write your code here:


let l1 = [1,2,4];
let l2 = [1,3,4];
let l3 = merge(l1, l2);
console.log(l3);







// 7   Remove dublicates            20Marks

// Input:  [1,1,2]
// Output: [1,2]

// Input:  [1,1,2,3,3]
// Output: [1,2,3]


// write your code here:

let listA = [1,1,2];
let listResult = new set(listA);
console.log(listResult);






// 8 extra marks for your well written        5Marks