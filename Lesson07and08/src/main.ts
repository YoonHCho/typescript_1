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
