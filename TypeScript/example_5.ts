// Interfaces

// Interfaces only look for their parameters/methods
interface Vehicle {
    summary(): string;
}

// This is still fine, but not good.
const oldCivic = {
    name: 'civic',
    year: new Date('1-1-2000'),
    broken: true,
    summary(): string {
        return 'The car is a ' + this.name + '.';
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.summary()}`);
};

printVehicle(oldCivic);