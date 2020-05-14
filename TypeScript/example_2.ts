// Type Annotations

// Primitives - annotation is generally not needed. 
let someValue: number = 5;
let firstName: string = "Bobby";
let skyIsBlue: boolean = true;
let surelyNot: null = null;
let nothingYet: undefined = undefined;

// Built-ins - annotation is generally not needed. 
let rightNow: Date = new Date();

// Arrays - annotation is sometimes a good idea
let colors: string[] = ['red', 'blue', 'green'];
let values: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// Object Literals - annotation is generally a good idea.
const person: {name: string; age:number} = {
    name: 'Bobby',
    age: 10
};

// Functions-  annotation is recommended.
const doThings: (val: number) => string = (val) => { 
    return `a string: ${val}`;
};

// "Any" types - always try to annotate.
const jsonString = '{"x": 10, "y": 20}';
const coord: {x:number; y:number} = JSON.parse(jsonString); // No error, but parse returns "any", which can't be evaluated for issues.

