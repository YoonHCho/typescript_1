// Basic Types
let myName: string = "My Name";
let yourNmae: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // This can be any type
let both: string | number; // This is an example of Union Type

meaningOfLife = 42;
isLoading = false;
album = 2;
album = "The album";
both = "string";

console.log(album + meaningOfLife);

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
