"use strict";
// Index Signatures
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
// console.log(todaysTransactions[prop]); // error
// ^ need index signature to dynamically access
const todaysNet = (transactions) => {
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
const student = {
    name: "Doe",
    GPA: 3.5,
    classes: [100, 200],
};
//  console.log(student.test)
// using keyof instead of index signature
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// below when you do not know the name of the interface
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const rev in monthlyIncomes) {
    console.log(monthlyIncomes[rev]);
}
