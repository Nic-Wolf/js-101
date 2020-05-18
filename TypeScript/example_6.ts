// Classes

class Vehicle {
    constructor(public color: string) {
    }

    protected drive(): void {
        console.log('moving...');
    }
    protected honk(): void {
        console.log('HONK');
    }
}

// Method Overrides...
class Car extends Vehicle {
    // Child constructors can't override the parents...
    constructor(public wheels: number, color: string) {
        // So we call the parent constructor inside, if 
        // we need a more specific constructor for the child.
        // ... don't specify "public", since we just want the 
        // value passed through. no new var needed.
        super(color);

    }

    drive(): void {
        console.log(`
        Eurobeat Intensifies...
        The car is ${this.color}, with ${this.wheels} wheels.
        `);
    } 
    startDriving(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
car.startDriving();