// Arrays
const carMakers: string[] = [];

carMakers.push('Ford', 'Subaru', 'Hyundai');

const carsByMake: string[][] = [
    ['f150', 'mustang'],
    ['outback', 'wrx'],
    ['elantra', 'veloster']
];

// Help with inference while extracting values.
const car = carMakers[1];
const myCar = carMakers.pop();

// prevent incompatible values.
carMakers.push(1000);

// Map helpers
carMakers.map((car:string) => {
    return car.toUpperCase();
});

// Flexible Types
const importantDates: (string|Date)[] = [new Date(), '10-29-2020'];
importantDates.push(1234);

// TUPLES!! (ordered collections)
const drink = {
    color: 'brown',
    carbonation: true,
    sugar: 40
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 50;

// type aliasing
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 40];
coke[1] = 50;