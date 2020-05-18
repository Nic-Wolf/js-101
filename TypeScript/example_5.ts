// Interfaces

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic: Vehicle = {
    name: 'civic',
    year: 2000,
    broken: true
};

// Better.
const printVehicle = (vehicle: Vehicle): void => {
    console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Is Broken? ${vehicle.broken}
    `);
};

printVehicle(oldCivic);