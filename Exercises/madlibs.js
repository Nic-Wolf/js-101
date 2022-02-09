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
// Consider this:

// we have a list of objects, each with the same parameters. This is often how data will be sent to our code.
// but what type of data is this? Yes, it is an "object", but it's more specific than that.
// It is good practice to have definitions for these custom data types. For this, we will use Classes.

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

// Now, consider that we have our list of "Word" objects.
// Writing out the data long-form like this is known as JSON: JavaScript Object Notation. ("jay"-"sahn").
var words = [
    { type: 'noun', value: 'beans' },
    { type: 'adjective', value: 'slimey' },
    { type: 'verb', value: 'running' },
    { type: 'noun', value: 'dog' },
    { type: 'adjective', value: 'red' }
];
// This is usually how we will be consuming data from other places, so expect to see it frequently.

// Some of the trickiest parts of programming is knowing how best to parse through data before doing things to it.
// Stepping away from madlibs for a moment... how can we get all the objects which have type of "noun"?

// we could use a for-loop and assign a new list...
var nouns = [], verbs = [], adjectives = [];
for (var i = 0; i < words.length; i++) {
    if (words[i].type == 'noun') {
        nouns.push(words[i]);
    } else if (words[i].type == 'verb') {
        verbs.push(words[i]);
    } else if (words[i].type == 'adjective') {
        adjectives.push(words[i]);
    } else {
        console.log('Error! got a word type we were not expecting: ' + words[i].type);
    }
}
// That looks good... but let's SWITCH IT UP!
// switch statements, much like if-statements allow us to evaluate logical conditions
// but instead of applying just one, switches can cascade through all the conditions sequentially.
// to avoid the cascade effect, we can use the keyword "break" as needed. Similarly, if we wanted 
// to force the continuation of a process manually, we could use the keyword, "continue"... though 
// you'll likely never see a 'continue' in a switch, since it does it by default.
// Speaking of "default", this condition represents a catch-all for everything that was not specified.
// essentially, cases are the "else if", and default is the "else". 
// There is never a reason to "break" in the default condition.
var nouns = [], verbs = [], adjectives = [];
for (var i = 0; i < words.length; i++) {
    switch (words[i].type) {
        case 'noun':
            nouns.push(words[i]);
            break;
        case 'verb':
            verbs.push(words[i]);
            break;
        case 'adjective':
            adjectives.push(words[i]);
            break;
        default:
            console.log('Error! got a word type we were not expecting: ' + words[i].type);
    }
}





function madLib(words) {
    // First, let's adjust the template:
    var template = 'Last week, I _verb_ to the _noun_ and ordered a _noun_. Even though it was _adjective_, it tasted _adjective_!';

    try {
        // We are about to run into a complication. We will have a list of nouns, verbs, and adjectives, both as the locations pruned
        // from the text, and from the user input.
        // how can we reliably associate one to the other?
        // how can we tell the template to update correctly?
        // ... more on this soon. Think on it.

        // We will have to do the same thing with our list of words.
        // How we do this will be driven by how our data is set up... 
        // which is why we developed the Word class beforehand.
        // we will first assume that all the user data in the words list is consistently of the Word-class definition
        // with that in mind, we can assign values.
        var nouns = [], verbs = [], adjectives = [];

        for (var i = 0; i < words.length; i++) {
            if (words[i].type == 'noun') {
                nouns.push(words[i].value);
            } else if (words[i].type == 'verb') {
                verbs.push(words[i].value);
            } else if (words[i].type == 'adjective') {
                adjectives.push(words[i].value);
            } else {
                console.log('Error! got a word type we were not expecting: ' + words[i].type);
            }
        }

        // next, we'll need to check the totals for verbs, nouns, and adjectives.
        var t_nouns = template.split('_noun_');
        var t_verbs = template.split('_verb_');
        var t_adjectives = template.split('_adjective_');
        var error = false;
        var message = '';

        if (nouns.length != t_nouns.length) {
            message += '\nThere are ' + t_nouns.length + ' nouns in the template, but it recieved ' + nouns.length + '.';
            error = true;
        }
        if (verbs.length != t_verbs.length) {
            message += '\nThere are ' + t_verbs.length + ' verbs in the template, but it recieved ' + verbs.length + '.';
            error = true;
        }
        if (adjectives.length != t_adjectives.length) {
            message += '\nThere are ' + t_adjectives.length + ' adjectives in the template, but it recieved ' + adjectives.length + '.';
            error = true;
        }
        if (!!error) {
            // We should compile our varous errors into one, so we can know everything that failed in one go.
            throw Error(message);
        }

        // Assuming everything is in order, now, we need to assign values.
        var output = template; // this is a copy of our template. we will be changing the values in this variable.

        for (var i = 0; i < t_nouns.length; i++) {
            // ... but how do we get the input values in the right places? t_nouns isn't actually connected to the template data!
            // actually, there are many ways we can accomplish this, but let's go back to an earlier example for this solution:
            output = output.replace('_noun_', nouns[i].value); // we can dynamically reassign string data.
        }
        // then simply do the same for the other entries.
        for (var i = 0; i < t_verbs.length; i++) {
            output = output.replace('_verb_', verbs[i].value);
        }
        for (var i = 0; i < t_adjectives.length; i++) {
            output = output.replace('_adjective_', adjectives[i].value);
        }

        return output

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
