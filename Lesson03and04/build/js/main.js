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
// Below is allow, since in JS, arrays are type of object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: "Doe",
    prop2: 11,
};
exampleObj.prop1 = "John";
// Annotate the variable with the type
let theObj = {
    name: "Zed",
    active: false,
    albums: [1984, "OU812", 5150],
};
let jP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
theObj = jP;
const artist1 = {
    name: "First",
    active: true,
    album: ["First One"],
};
const artist2 = {
    name: "Secone",
    album: ["Second One"],
};
const greetGuitarist = (guitarist) => {
    return `Hello, Guitarist - ${guitarist.name}`;
};
console.log(greetGuitarist(artist2));
const drummer1 = {
    //   name: "Drummer 1",
    album: [1],
};
const drummer2 = {
    name: "Drummer 2",
    active: true,
    album: [1],
};
const greetDrummer = (drummer) => {
    return `Hello, ${drummer.name}`;
};
console.log(greetDrummer(drummer1));
// When you are trying to access an optional property, you also need to call it as optional prop
const drummerOptionalActive = (drummer) => {
    if (drummer.name) {
        return `Hello, ${drummer.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(drummerOptionalActive(drummer1));
console.log(drummerOptionalActive(drummer2));
// Enums - Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// console.log(Grade.U); // logs 0 when it's just U
console.log(Grade.U); // logs 1 when it's just U = 1
// Literal types
let myName;
// myName = 'John' // This doesn't work
let userName;
userName = "Amy";
// Functions
const add = (a, b) => {
    return a + b;
};
// when there is no return
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello There");
logMsg(add(7, 7));
const subtract = function (c, d) {
    return c - d;
};
console.log(subtract(10, 13));
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = (c, d) => {
    return c * d;
};
console.log(multiply(5, 4));
// optional parameters
const addAll = (a, b, c) => {
    // add a type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2));
console.log(sumAll(1, 2));
console.log(sumAll(undefined, 2)); // need to pass undefined for the default value for a to kick it, if only passes 1 argument, it will not work.
// rest parameters
const total = (a, ...nums) => {
    return (a +
        nums.reduce((prev, curr) => {
            return prev + curr;
        }));
};
logMsg(total(10, 2, 3));
// Never Type - essentially for functions that explicitly throw errors and infinite/endless loops
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// when a never type can be useful, use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
