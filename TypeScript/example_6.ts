// Classes

class Vehicle {
    drive(): void {
        console.log('moving...');
    }
    honk(): void {
        console.log('HONK');
    }
}

// Method Overrides...
class Car extends Vehicle {
    drive(): void {
        console.log('Eurobeat Intensifies...');
    } 
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();