

// Pass an ID to a "web server" and get the corresponding data back.
function fakeApiEndpoint(itemId) {
    // Make a fake DB to pull data from.
    var db_as_json = {
        "item1": {
            "contents": "This is the first item.",
            "details": Math.round(Math.random() * 1000)
        },
        "item2": {
            "contents": "... And the second item.",
            "details": Math.round(Math.random() * 1000)
        },
        "item3": {
            "contents": "Here is item three.",
            "details": Math.round(Math.random() * 1000)
        },
        "item4": {
            "contents": "The fourth item is here!",
            "details": Math.round(Math.random() * 1000)
        }
    };

    // Mimick a web request.
    console.log('Requesting item from the server... ' + itemId);
    setTimeout(function() {
        console.log('Response: ' + JSON.stringify(db_as_json[itemId]));
        // Challenge 1:
        // We need a good method for handling our response.
        //   a. How can we guarantee that we're getting data?
        //   b. How can we apply the data to existing resources?
        //   c. How should we handle errors?

    }, (Math.round(Math.random() * 10000) % 5000) + 1000);
}

function getItem(itemId) {
    return fakeApiEndpoint(itemId);
}

//////////////////////////////////
// Normal Promises

// Promises act like preprocessors for your functions.


// Challenge 2:
// How can we refactor the getItem() function to act like a promise?
// Promises MUST resolve, so we need to return our information while
// calling the resolve function.
function getItem(itemId) {
    return new Promise(function(resolve, reject) {
        fakeApiEndpoint(itemId, resolve);
    });
}

// Challenge 3:
// How can we ensure that the request is getting handled?


// Challenge 4:
// Assume that each subsequent item relies on its predecessor.
// Item1 must be successfully returned before we can process item2, and
// item 2 must be successfully returned before we can process item3, etc.
// How can we achieve this?

// This won't work:
var call_1 = getItem('item1');
var call_2 = getItem('item2');
var call_3 = getItem('item3');


// Challenge 5:
// Is there a better way to handle asynchronously-returned data?




























// Yes. Map / Reduce.

// In the below example, we use Array.map() to asynchronously "loop" through the array.
// Remember the function passed to map() is expected to return promises.
var queryList = ["item1","item2","item3"];

queryList.map(function(data) {
    // loop through the requests and return an array of the responses.
    getItem(data);
}).reduce(function(chainOfEvents, promiseEvent) {
    // Since the responses are promises, we can use the accumulator of Array.reduce() to create a chain of "then"s.
    return chainOfEvents
        .then(function(){
            return promiseEvent;
        })
        .then(output);
// Set the reducer's current value to the return of our current resolver.
}, Promise.resolve())
// Lastly, print a complete message when all accumulated promises have been resolved.
.then(function() {
    output("Complete!");
});
