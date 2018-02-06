// Make a Data Class
function Data(elementId) {

    var element = !!elementId ? document.getElementById('elementId'): '';


    this.parent = { value: !!element ? element.parentElement : '', mandatory: true };
    this.elementString = { value: !!element ? element.tagName: '', mandatory: true };
    this.attributes = {
        mandatory: true,
        innerText: { value: !!element ? element.innerText: '', mandatory: false },
        value: { value: !!element ? element.value: '', mandatory: true },
        styles: { value: !!element ? document.defaultView.getComputedStyle(elementId, null): '', mandatory: false }
    };
}


Data.prototype.getValue = function(property) {
    if (this.hasOwnProperty(property)) {
        return this[property].value;
    } else {
        console.log('ERROR: No property found with the name "' + property + '".');
    }
};



function getArgNames(func) {
    // First match everything inside the function argument parens.
    var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];

    // Split the arguments string into an array comma delimited.
    return args.split(',').map(function(arg) {
        // Ensure no inline comments are parsed and trim the whitespace.
        return arg.replace(/\/\*.*\*\//, '').trim();
    }).filter(function(arg) {
        // Ensure no undefined values are added.
        return arg;
    });
}