// Type Annotations

// Primitives
let someValue: number = 5;
let firstName: string = "Bobby";
let skyIsBlue: boolean = true;
let surelyNot: null = null;
let nothingYet: undefined = undefined;

// Built-ins
let rigthNot: Date = new Date();

// Arrays
let colors: string[] = ['red', 'blue', 'green'];
let values: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// Object Literals
const person: {name: string; age:number} = {
    name: 'Bobby',
    age: 10
};

// Functions
const doThings: (val: number) => string = (val) => { 
    return `a string: ${val}`;
};