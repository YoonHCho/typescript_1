// Type Assertions/Casting
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific type, str or num
let c = a as Three; // more specific

// using angle bracket, NOTE - cannot use this in TSX file in React
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string // will throw error
10 as unknown as string;

// the DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("img");

// img.src;
// myImg.src;

// LESSON 6 - class
class Coder {
  // if you add visibility(or data or access) modifiers/members, public readonly etc in constructor, prefix it before the parameters, don't need to define the variables here
  //   name: string;
  //   music: string;
  //   age: number;
  //   lang: string;

  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    // Assignments in the body of constructor is not required if visibility modifier is used
    // this.name = name;
    // this.music = music;
    // this.age = age;
    // this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 18);
console.log(Dave.getAge());
// console.log(Dave.age); // error
// console.log(Dave.lang); // error

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    // below can be ommited
    // this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 21);
console.log(Sara.getLang());
// console.log(Sara.age); // error
// console.log(Sara.lang); // error
//////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Peter = new Guitarist("Peter", "Guitar");
console.log(Peter.play("plays"));
////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const April = new Peeps("April");

console.log(John.id);
console.log(Steve.id);
console.log(April.id);
console.log(Peeps.count);
////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((ele) => typeof ele === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 18]; // this will throw an error
