// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


function outer() {
    let a = 10;
    function inner(){
        console.log(a)
    }
    return inner;

}
// outer()(); // this one way of calling

const res = outer();
res();


function outer1(b) {
    function inner1(){
        console.log(a, b)
    }
    let a = 10;
    return inner1;
}

const res1 = outer1("Hello World");
res1();

function outest(c){
function outer1(b) {
    function inner1(){
        console.log(a, b, c)
    }
    let a = 10;
    return inner1;
}
return outer1;
}
const res2 = outest("Hello Srinivas")(100);
res2();

function Counter() {
    let count = 0;   // data hidden concept count is hidden and function constructor
    this.incrementCounter = () => {
        count++;
        console.log('increment', count);
    }
    this.decrementCounter = () => {
        count--;
        console.log('decrement', count);
    }
}

const counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
