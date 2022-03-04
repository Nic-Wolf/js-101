// Consider the following object:
function Person() {
    this.name = '';
    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
}

// Output:
var person = new Person();
person.setName('biff');
person.getName(); // "biff"
person.name // "biff"
person // Person {name: "biff", getName: ƒ, setName: ƒ}

// What if we don't want to expose the name, but still allow the user to interact with it?


// Enter: Closures!
function Person() {
    // Closures use inner functions to force the execution window to persist, even after the main function has returned!
    // This means that the "name" variable persists even after the function has finished executing! Holy crap!
    var name = '';

    // If we return an object from the function, we would expect to see a basic Object-type return value... which we
    // will... however, since the "getName" inner function is referencing the "name" variable", it also persists
    // within the returned object!
    return {
        getName: function () {
            console.log('Displaying the name...');
            return name;
        },
        setName: function (value) {
            console.log('Setting the name...');
            name = value;
        }
    };
    // ... of course, in a constructor like this, there's little point in setting up a return value...
}

// Output:
var person = new Person();
person.setName('biff'); // "Setting the name..." "biff"
person.getName(); // "Displaying the name..." "biff"
person.name // undefined
person // Person {getName: ƒ, setName: ƒ}

// Why is this important??? well, first off, this is the original way of creating a private scope, meaning, nobody
// can manipulate "name" unless you (the original author) make a specific function to allow them to do so!


// Let's write this in a cleaner way... with a little zest:
function Person() {
    var name;

    this.getName = function () {
        if (name) {
            console.log('Your name is ' + name);
        } else {
            console.log('Hmm... it looks like you don\'t have a name yet!');
        }
    };

    this.setName = function (value) {
        if (!!value) {
            name = value;
            console.log('Hello, ' + name + '!');
        } else {
            console.log('...You were supposed to tell me your name just now...');
        }
    };
}


// ADVANCED STUFF (i.e: 50093r L33+ h4x0rz 1oh1):
// In the real world, we tend to use closures to maintain execution scope of specific functions, so we can add to
// them. This is frequently considered hacking... because it basically is.
// The execution scope, (closure) is different from the "this" scope, in that we can pass it around from function to
// function!

// Consider this:
function l33tH4x(func) {
    var newName = 'NOT ' + name + '! HAHA!';

    // dive into setName() in the debugger, and you'll see "name" in a separate "closure" scope!
    debugger;
    return func.setName(newName);
}

// Using the Person class from above, see how we can affect it's internal, "private" variable, name:
// Output:
var person = new Person();
person.setName('biff'); // "Setting the name..." "biff"
person.getName(); // "Displaying the name..." "biff"
l33tH4x(person); // "Hello, NOT biff! HAHA!!"
person.getName(); // "Your name is NOT biff! HAHA!"

// Fun stuff :)


// Singletons: Classes which we only want to have 1 instance of an object.
// This is used frequently with code modules and services.
var iife = (function (a, b) {
    return new Word(a, b);
})('varb', 'running');
// We'll look at these more later.