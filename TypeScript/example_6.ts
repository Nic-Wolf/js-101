// Classes

class Vehicle {
    private drive(): void {
        console.log('moving...');
    }
    protected honk(): void {
        console.log('HONK');
    }
}

// Method Overrides...
class Car extends Vehicle {
    drive(): void {
        console.log('Eurobeat Intensifies...');
    } 
    startDriving(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle();
// no longer allowed to be called externally.
vehicle.drive();
vehicle.honk();

const car = new Car();
car.startDriving();