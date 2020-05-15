// Some Object
const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 13,
        long: 200
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// Destructured object variable
const {age}: {age: number} = profile;

const {coords: {lat, long}}: {coords: {lat: number, long: number}} = profile;