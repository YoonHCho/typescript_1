"use strict";
// Original JS Code, make it so it works with TS
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// First variation
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string
// thisYear = new Date().getFullYear().toString();
// if (year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }
// Second variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
// my own answer
// const year = document.getElementById("year")!;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
