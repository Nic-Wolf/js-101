// Interfaces

interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic: Vehicle = {
    name: 'civic',
    year: new Date('1-1-2000'),
    broken: true,
    summary(): string {
        return 'The car is a ' + this.name + '.';
    }
};

// Getting Fancy
const printVehicle = (vehicle: Vehicle): void => {
    console.log(`
    ${vehicle.summary()}
    Year: ${vehicle.year}
    Is Broken? ${vehicle.broken}
    `);
};

printVehicle(oldCivic);