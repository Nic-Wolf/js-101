// Talkin About Objects!

// PART 1
// Try running the code in the console, and calling some of the parameters
// What happens if you type things._thing? things.doSomething()? etc.

var things = {

    // 1. Simple Property Definitions
    // We can define object properties as simple key/ value pairs, which will possess certain default settings.
    // Generally, this is the most common way of writing object properties.
    _stuff: [],

    // 1a. Methods:
    // Methods are functions which are assigned to an object property, and are designed with the intent to be used
    // primarily to modify the other properties of the object.*
    doSomething: function() {
        this._stuff.push(Math.round((Math.random(1, 2))*100));
        return this._stuff;
    },
    // * There is a design philosophy known as the Module Pattern. This differs from above in that its objects
    // rarely posess inner data properties, and its methods are built to be used with external code. This is
    // a very common way of building code libraries and APIs, and we'll talk more about it later :)

    // 2. Formal Property Definitions
    // We can explicitly define all the inner properties of an object's properties with a few predefined keywords.
    // These are used to override a property's default settings, and to allow custom logic when reading from or
    // writing to the object property. This is important when we need to keep our data private!
    _thing: {
        // Note: you can pick and choose which of these inner properties you wish to define.

        // Property Data
        value: "stuff",

        // Property Settings
        enumerable: true,
        configurable: true,
        writable: true,

        // Property Accessors
        get: function() {
            console.log("Reading Thing...");
            return this._thing;
        },
        set: function(value) {
            console.log("Writing " + value + " to Thing...");
            this._thing = value;
        }
    }

};

// 2a. A final note on formal properties:
// Generally, you won't see formal property definitions outside of APIs, and even then, they'll be called
// ad-hoc with a slightly different syntax.
var things = {
    _thing: "stuff"
};

Object.defineProperty(things, '_thing', {
    get: function() {
        console.log("Reading Thing...");
        return this._thing;
    },
    enumerable: true
    // etc.
});


// PART 2
// Examine the below syntax... Rather than writing an object as well, an Object, we can also write it as a function!
function Things(a, b) {

    // Data Properties
    this._thing = a ? a : "" ; // Note: This is a "ternary" single-line if-else statement. If "a", then "a", else "".
    this._stuff = b ? [b] : [];

    // Accessor Properties
    this.getThing = function() {
        console.log("Reading Name...");
        return this._thing;
    };
    this.setThing = function(value) {
        console.log("Writing " + value + " to Name...");
        this._thing = value;
    };

    // Methods
    this.doSomething = function() {
        this._stuff.push(Math.round((Math.random(1, 2))*100));
        return this._stuff;
    };
}

// We can apply this function to a variable as a carbon-copy of the original, using the "new" keyword
var aThing = new Things();
// Do you get the expected results when you try aThing.doSomething()?
// There is a LOT to be said about what is going on here, so I will go back over it verbally in the next session :)
