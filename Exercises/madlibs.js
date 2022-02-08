// Exercise 1: Mad-Libs

//----------------------------------------------------------------------------//
// 1a: Create a mad-lib. Just give it 1 word for now.
//----------------------------------------------------------------------------//
function madLib(input) {
    var template = 'Last week, I walked to the ___ and ordered a ___. Even though it was ___, it tasted ___!';

    // Hint: consider regex when you want to replace multiple similar items.
    var output = template.replace(/___/g, input);

    return output;
}


//----------------------------------------------------------------------------//
// 1b: Use a list of words.
//----------------------------------------------------------------------------//
function madLib(words) {
    var template = 'Last week, I walked to the ___ and ordered a ___. Even though it was ___, it tasted ___!';

    // Hint: before applying the sequence of words, 
    //       try evaluating the template as a list, instead of a string.
    var templateParts = template.split('___');
    for (var i = 0; i < words.length; i++) {
        // Access each part of the list with brackets. 
        // "i" is the variable representing the index of our list.
        // we can simply concatenate on existing entries, since we know they'll always be strings.
        templateParts[i] = templateParts[i] + words[i];
    }
    var output = templateParts.join(''); // when joining, don't forget the inner "" param. This will remove unwanted delimiters.

    return output;
}


//----------------------------------------------------------------------------//
// 1c: What if you have more words than there are empty spaces?
//----------------------------------------------------------------------------//
function madLib(words) {
    // This one will get tricky, so we need to take things one step at a time.
    // We'll take advantage of the browser's debugger, so we can watch our code execute line by line.
    debugger;

    var template = 'Last week, I walked to the ___ and ordered a ___. Even though it was ___, it tasted ___!';

    // The try/catch block (the programming term for a declared execution scope) will attempt to perform an process.
    // if anything fails, returns what is in the catch's passed parameter.
    try {
        var wordsRecieved = words.length;
        var wordsAvailable = template.split('___').length;

        // While try's are used mostly to detect actual system failures, we can create our own error as well.
        if (wordsRecieved !== wordsAvailable) {
            // Now, the browser will try to consume all "thrown" errors, but for this exercise, we want to override this feature.
            // for reference, try deleting the try/catch lines and see what happens.
            throw Error('There are ' + wordsAvailable + ' blank words in the template, but it recieved ' + worksRecieved + '.');
        }

        var templateParts = template.split('___');
        for (var i = 0; i < words.length; i++) {
            templateParts[i] = templateParts[i] + words[i];
        }
        var output = templateParts.join('');

        return output;

    } catch (e) {
        // Question: There are 4 words available in the template... did we trigger the error when we used 6 words? what about 5?
        console.log('Something went wrong!\n' + e);
    }
}


//----------------------------------------------------------------------------//
// 1d: Refactoring
//----------------------------------------------------------------------------//
function madLib(words) {
    // This variable can exist outside of the try/catch, because it is a static value initialized solely within the scope
    // of the function. No references or other actions are taken on it yet, so it will always result in a positive expression.
    var template = 'Last week, I walked to the ___ and ordered a ___. Even though it was ___, it tasted ___!';

    try {
        var wordsRecieved = words.length; // this stays in the try/catch, because there is a chance that no value was given at all.
        var wordsAvailable = template.split('___').length - 1; // string.length returns a number, so we can simply initialize the variable with an equasion.

        // We want to avoid declaring variables in conditional code blocks.**
        var templateParts = template.split('___');
        var output; // We can intentionally declare variables without values. This will be undefined until we use it.
        // Technically, we could've declared 'output' outside of the try/catch, but it is more readable to keep it close to
        // the scope, and lines of code which use it.

        if (wordsRecieved == wordsAvailable) {
            // ** This 'if' statement is a conditional code block.
            for (var i = 0; i < words.length; i++) {
                templateParts[i] = templateParts[i] + words[i];
            }
            output = templateParts.join('');

        } else {
            // We can check for errors a number of different ways... we'll keep it like this for now.
            throw Error('There are ' + wordsAvailable + ' blank words in the template, but it recieved ' + wordsRecieved + '.');
        }

        return output;

    } catch (e) {
        console.log('Something went wrong!\n' + e);
    }
    // Can we refactor even more? ... in a meaningful way?
}


//----------------------------------------------------------------------------//
// 1e: Can we specify if a word is a noun, verb, or adjective?
//----------------------------------------------------------------------------//

// Firstly, we will need to specify the types of our words we plan on using.

// What we ultimately want:
var parameterDefinition = {
    type: '"noun", "verb", or "adjective"',
    value: 'a single user-provided word'
}
// How do we establish the data definition for something like a function parameter, or other dynamic data object?

// We can accomplish this a few ways, but we'll use the more conscientious approach of building a class.
// Classes are templates for objects. These are similar to function definitions, since they are only intended
// to be defined once, then copied as needed throughout the code. The difference with functions however,
// is that they won't throw errors if you redefine them over and over. A Class will.
// in ES5, we define classes by creating named functions, and by being nice to our fellow devs, and Capitalizing!
function Word(type, word) {
    // Within the scope of this definition, we can request a special, conditional object, "this".
    // The "this" keyword is quite literally, whatever is in focus, contextually at that line's stage in the execution cycle.
    // so, "this" within the Word function, is the area where Word is trying to define things.
    // We can operate within this space to design our own blueprint for the Word function
    this.type = type;
    this.value = word;
}

function madLib(words) {
    // First, let's adjust the template:
    var template = 'Last week, I _verb_ to the _noun_ and ordered a _noun_. Even though it was _adjective_, it tasted _adjective_!';

    // next, we'll need to check the totals for verbs, nouns, and adjectives.
    var nouns = template.split('_noun_');
    var verbs = template.split('_verb_');
    var adjectives = template.split('_adjective_');

    // We will have to do the same thing with our list of words.
    // TODO - finish this




    try {
        var wordsRecieved = words.length;
        var output;

        // When you have a lot of conditions to meet, you can cascade through a switch statement, 
        // which is similar to an if statement, but will try to sequentially execute each case, unless we specifically break out.



        if (wordsRecieved == wordsAvailable) {
            for (var i = 0; i < words.length; i++) {
                templateParts[i] = templateParts[i] + words[i];
            }
            output = templateParts.join('');

        } else {
            throw Error('There are ' + wordsAvailable + ' blank words in the template, but it recieved ' + wordsRecieved + '.');
        }

        return output;

    } catch (e) {
        console.log('Something went wrong!\n' + e);
    }
}


// Singletons: Classes which we only want to have 1 instance of an object.
// This is used frequently with code modules and services.
var iife = (function (a, b) {
    return new Word(a, b);
})('varb', 'running');
// We'll look at these more later.
