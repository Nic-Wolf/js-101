# Front-End JavaScript 101

## What is JS?
It's not Java. It's not related to Java in any way.

JavaScript is "owned" for the most part, by Mozilla, and all primary documentation for the native language can be found in their documents.

### Data Types
MDN organizes our data types into several groupings known loosely as “Standard Objects”… take that statement with a grain of salt.
You can review them all here if you like: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects 

We will only be referencing a handful.

#### Primitives
https://developer.mozilla.org/en-US/docs/Glossary/Primitive 
A “primitive” type is an object with only values, and no methods (functions built to work with the data of an object).
•	boolean
•	number
•	string

#### Singular Values
Self-explanatory. These objects are single-value entities. They are also sometimes referred to as primitive values (all champagne is bubbly, but not all bubbly is champagne)
•	null
•	undefined
•	NaN

#### Fundamental Objects
The fundamental objects are the primary building blocks for the language, and are the data types of which all other things in JavaScript are made of.
•	Object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object 
•	Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function 

#### Formal Types
Generally referred to as “classes” in other languages, these are Object-type extensions of generic data types that poses methods to assist in data manipulation.
•	Array
•	String 
•	Number

### Syntactic Operators
These are special characters, or a series of special characters that evaluate or allow the operation of one or more variables.
•	Mathematical: +, -, /, *, %
•	Comparative: <, <=, >, >=, ==, ===, !=, !==
•	Logical: &&, ||,  !
•	Associative: =
•	Executive: ()
•	Referential: .

### Talking Notes
* Brief talk on truthiness (difference between “==” and “===”)
* Discussion on “for” loops (the others are irrelevant)

### Code Problem
Consider this line:
```
var words = “Today is the first day of the rest of your life.”;
```

1. Write code to evaluate the variable words, and log several things to the console:
    1. The character length of words
    2. The first character of words
    3. The last character of words
    4. The 12th character of words
    5. Bonus: The 4th word of words

2. Write a function that logs the number of the letter “t” from words.
    1. Bonus 1: Let the user decide which letter to evaluate.
    2. Bonus 2: let the user evaluate any word or phrase.
    
