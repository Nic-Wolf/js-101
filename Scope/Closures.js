// Consider the following object:
function Person() {
    this.name = '';
    this.getName = function() {
        return this.name;
    };
    this.setName = function(value) {
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
        getName: function() {
            console.log('Displaying the name...');
            return name;
        },
        setName: function(value) {
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

    this.getName = function() {
        if (name) {
            console.log('Your name is ' + name);
        } else {
            console.log('Hmm... it looks like you don\'t have a name yet!');
        }
    };

    this.setName = function(value) {
        if (!!value) {
            name = value;
            console.log('Hello, ' + name + '!');
        } else {
            console.log('...You were supposed to tell me your name just now...');
        }
    };
}

// Try it out! :)