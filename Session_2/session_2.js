// Let's talk Strings:
// Probably the most important complex data type available to us, and the
// secret truth of every processed data point in javascript.
var s = 'a two-dimensional collection of characters!';
// Strings are arrays (sort of) of characters, delimited by either '' or "".
// They can act as both individual values, or as arrays.
// javascript can cast anything to or from a string... 
// ... and it does, even when you're not asking it to!


// Let's talk Arrays:
// Arrays are 1-dimensional lists of data. This means, as far as 
// the array itself is concerned, all of the data within it is a single
// point of reference:
var arr = [1, 2, 3];

// Arrays don't care what kind of data they contain, or how much data
// they might contain, unlike other programming languages.
var arr = [
    1,
    2,
    'a',
    (2.7 / 0.6),
    function () { return 'something'; },
    { f: 123, g: 345 },
    'this can go on forever...'
];

// array entries are delimited with commas. sometimes, you will see a trailing 
// comma at the end of an array... this is acceptable, but generally unnecessary.
var arr = [1, 2, 3, 4,];

// We access individual items in an array through [].
// Arrays are indexed at 0, not 1.. .however, this does not affect the
// actual count of items within the array.
var arr = ['a', 'b', 'c'];
arr[0]; // will return a
arr[2]; // will return c
arr.length; // will return 3

// There are a handful of useful methods on arrays:
[].pop(); // updates the array by removing the last entry in the array.
[].slice(); // returns the values between two indexes.
[].join(); // flattens the array data into a string... conversely, strings can be split() into arrays.


// Now, let's say you're recieving a message from someone, and you want to check 
// to see if there is a specific word in their message....

// Since we normally recieve data from outside sources in the form of JSON
// we'll use the following object:
var data = {
    statusCode: 200,
    senderId: 1337,
    senderName: 'Steven',
    recipientId: 2224,
    message: 'The patient crow flies at midnight, below a full moon.'
};

// Like with most data a program recieves, there is usually more stuff than we generally
// care about, for the sake of the exercise. But in order to do what we want to do,
// we would likely need that other information first. For this exercise, we'll ignore most of it.

// Let's say, we need to write a response that varies depending on the nature of the message.
// we'll use these rules for now:
// if the bird is patient, we should respond with: "safe". Otherwise, respond "dangerous"
// if the bird is a crow, we should respond with : "meeting". otherwise, respond "ultimatum"
// if the time of day described is midnight, we should respond with: "tomorrow". else "right now"
// and lastly, if the moon is full, we should respond with: "afternoon". else nothing.

// that's a lot of tasks! ... but really, it's only one complicated task with many factors.
// The best thing to do here, is to write a function that can interpret the message
function interpretMessage(message) {
    // combine the words from each of the rules above, and output the result.
}