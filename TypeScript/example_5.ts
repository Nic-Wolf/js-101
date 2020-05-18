// Interfaces
// The problem...
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
// LOOOONG Annotaitons
const printVehicle = (vehicle: {name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}\nYear: ${vehicle.year}\nIs Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);