"use strict";
// Arrays
let strArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
strArr[0] = "John";
strArr.push("heyheyhey");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = strArr;
let test = []; // TypeScript will think this is Any Type
let bands = [];
bands.push("str");
// In Union the order doesn't matter
let mixedAgain = [1984, true, "1984"];
// Tuple - Order & size matters. defines something that is locked in to a type in a specific element position
// Tuples are immutable, elements cannot change after creation, including adding or removing elements.
let myTuple = ["john", 1984, true];
let mixed = ["doe", 1, false]; // TypeScript infers that this is a union of string number boolean
// mixed = myTuple; // works
// myTuple = mixed; // Error: Target(myTuple) requires 3 element(s) but source(mixed) may have fewer.
// myTuple[3] = 4; // does not work, as mentioned Tuples are immutable, however you can mutate the existing elements values as long as the data type matches
// myTuple.push(4); // This works only because the .push() is not a method specific to tuples. when you call .push() method to a Tuple, TypeScript treats Tuple as an array and allows you to add elements to it.
/*

*/
// Objects
//53:33
