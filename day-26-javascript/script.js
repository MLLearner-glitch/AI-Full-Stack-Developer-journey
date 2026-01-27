//JavaScript was invented by Brendan Eich in 1995.Javascript is a programming language used to create dynamic and interactive content on websites.
//Javascript Comments This is single comment line
/*This is multi-line comments*/
/* Variable is a container used to store data in javascript.javascript has 3 ways to declare variables:1.let 2.const 3.var(not recommended)*/
let a = 10; 
const b = 15;
var c = 5;
console.log(a,b,c);
//differences between 'var','let','const'
//var is redeclare,reassign,scope function 
//let is not redeclare,reassign,block scope
//const is not redeclare,not reassign, block scope
let x = 10;
x = 20;      //  Allowed

const y = 5;
//y = 10;      //  Not allowed

var z = 1;
var z = 2;   // Allowed (but not recommended)
//Variable Naming Rules
// Use letters, numbers, _, $
// Cannot start with a number
// No spaces
//  Do not use reserved keywords
//let userName = "Ravi";   // legal name
//let 1name = "Sai";     // illegal name
//let user name = "Ram"; // illegal name
//Datatypes with variables
let d = 10;         // Number
let e = "Hello";   // String
let f = true;      // Boolean
let g = null;      // Null
let h;             // Undefined
console.log(d,e,f,g,h);