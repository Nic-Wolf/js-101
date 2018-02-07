// Given what we know thus far about objects

// Consider the following object:
function Thing() {
    this._thing = '';

    this.print = function() {
        console.log(this._thing);
    };

}

// "this" is a keyworded object that contains values which are both specific to the scope of its declaration, AND the
// execution of its parent. While there is only ever 1 this object, it does not get created or destroyed in the
// traditional sense; only the inner data does. This data however, can persist if we pass it around from execution
// to execution. We call this type of process a closure... more on that in a minute.

// This!
function whatsThis(this) {
    console.log('This is the window!');
    return JSON.stringify(this);
}
// oh no! this doesn't exist yet! ... wait... what!?

// so... which this is.. this?
var someScope = {
    "thing1":'one',
    "thing2": this
};

// Okay, what about this this!
var someScope = function() {
    var thing1 = 'one';
    var thing2 = this;
    return thing2;
};

// Fine! Let's assign something like we did in the beginning!
var someScope = function() {
    this.thing1 = 'one';
    return this;
};

// What!?! Well then how the heck did we use it last time!!
// It's subtle, but the this object isn't actually something we can reference normally. However, we can reference
// the parameters we've previously defined, or those we expect to be there in the parent scope.



// Closures!
function Name() {
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
}
// Why is this important??? well, first off, this is the original way of creating a private scope, meaning, nobody
// can manipulate "name" unless you (the original author) make a specific function to allow them to do so!
