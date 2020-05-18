// Interfaces

// Refactoring... 
// Assuming we need to declare a specific part of an object as its own 
// interface, such as with specific methods and data types that are 
// to be shared between instances, (even if the whole object holds
// more numerous and specific data) we should generalize that interface
// to support reuse, and refactor our usage of that data in a way that
// makes more sense in the context of the desired end result.

interface Reportable {
    summary(): string;
}

// We should be able to print details, regardless of the object's data. soo...
const oldCivic = {
    name: 'Civic',
    year: new Date('1-1-2000').getUTCDate(),
    broken: true,
    summary(): string {
        return `
        Car Details...
        Model: ${this.name}
        Year: ${this.year}
        ${this.broken ? "This Car is broken." : ""}
        `;
    }
};

// Both of these objects should use the same method, even though they're unrelated.
// however, they should specify the summary according to their respective data.
const racerX = {
    name: 'Racer X',
    age: 'unknown...',
    car: oldCivic,
    summary(): string {
        return `
        This is ${this.name}.
        His age is ${this.age}
        He was last seen driving a ${this.car.name}.
        `;
    }
};


const printDetails = (item: Reportable): void => {
    console.log(item.summary());
};

printDetails(oldCivic);
printDetails(racerX);