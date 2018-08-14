function runTests() {

    const results = [];

    // Test: init class
    const options = {};
    const hashTable = new HashTable(options);
    // Assertion
    let test = new Assertion(`Initializing hashTable as HashTable.`, hashTable);
    test.dataSameAs(new HashTable());
    results.push(test);


    // Test: add entry
    const aKey = 'thing';
    const aValue = 12345;
    hashTable.set(aKey, aValue, 'static');
    // Assertion
    test = new Assertion('Assigning a new static member to hashTable.', hashTable);
    test.dataContains(aKey, aValue);
    results.push(test);

    test = new Assertion('Validation: static member value cannot be changed.', hashTable);
    test.overwriteMember(aKey, 'derpderpderpderp');
    results.push(test);


    // Test: retrieve entry value
    // hashTable.getValue(aKey);
    // hashTable[aKey];
    // Assertion


    // Test: update entry
    // const bValue = 'six seven eight nine';
    // hashTable.setValue(aKey, bValue);
    //Assertion

    // Test: delete entry
    // hashTable.delete(aKey);
    // Assertion

    return results;
}

class Assertion {
    constructor(testStr, data) {
        this.testStr = testStr;
        this.data = data;
        this.pass = false;
        this.details = '';

        if (typeof data === 'object') {
            this.details = `${data.constructor.name}: ${JSON.stringify(data)}`
        } else {
            this.details = 'not yet implemented.';
        }
    }

    // Tests
    dataSameAs(val) {
        this.pass = objIsEquivalent(this.data, val);
    }

    dataContains(key, val) {
        const expectedData = Object.assign({}, { [key]: val });
        this.pass = objIsEquivalent(this.data[key], expectedData[key]);
    }

    overwriteMember(key, val) {
        try {
            this.data[key] = val;
        } catch (e) {
            // do nothing. this really should throw an error.
        }
        this.pass = (this.data[key] !== val);
    }
}

function objIsEquivalent(a, b) {
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}
