"use strict";
// let greet: Function = () => {
//   console.log("Hello, world!");
// };
// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b);
//   console.log(c);
// };
// add(5, 10);
// const minus = (a: number, b: number) => {
//   return a + b;
// };
// let result = minus(10, 7);
// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello `);
// };
// const greetAgain = (user: objWithName) => {
//   console.log(`${user.name} says hello `);
// };
// let greet: Function;
// // example 1
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// };
// // exaple 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === "add") {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// };
// // exaple 3
// let logDetails: (obj: { name: string; age: number }) => void;
// type person = { name: string; age: number };
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };
