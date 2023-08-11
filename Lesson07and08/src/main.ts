// Index Signatures

// interface TransactionObj {
//   // below is example of index signature. all the values in key will be a string and all the values in value will be number. key(str): value(num)
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
// console.log(todaysTransactions[prop]); // error
// ^ need index signature to dynamically access

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    // below gave an error using lines 8-12, but after idex signature, no error
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40; // cannot reassign since read-only

console.log(todaysTransactions["Hey"]);

/////////////////////////////////////////////
// keyof Assertions
interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doe",
  GPA: 3.5,
  classes: [100, 200],
};

//  console.log(student.test)

// using keyof instead of index signature
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// below when you do not know the name of the interface
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

/////////////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

// Record below is TypeScript's built-in type, 'Record' type is used to represent a collection of key-value pairs, where the keys are of one type and the values are of another type. AKA Record Utility Type
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const rev in monthlyIncomes) {
  console.log(monthlyIncomes[rev as keyof Incomes]);
}

/////////////////////////////////////////////

// Lesson 8 Generics: <T> is an example of type variable/parameter
// Type parameter is a feature that allows you to create generic types or functions that can work with a variety of data types

console.log("///////////// Lesson 8 /////////////");
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  // array and null returns as a type of object, so need to take account for that
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  // process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "dave" }));
// console.log(processUser({name: 'dave'})); // will throw an error because id is required

const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12

const myState = new StateObj<(string | number | boolean)[]>([15]);
console.log(myState.state);
myState.state = ["dave", 18, true];
console.log(myState.state);
