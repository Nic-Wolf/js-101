class HashTable {
    constructor() {
        this.inaneValue = 'test';
    }

    set(key, val, type) {
        if (!this.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(this, key).writable) {
            switch (type) {
                case 'static':
                    Object.defineProperty(this, key, {
                        value: val,
                        writable: false,
                        configurable: false
                    });
                    break;
                default:
                    // Set everything else to public.
                    this[key] = val;
            }
        } else {
            console.log(`The parameter: '${key}' has already been assigned to this instance.`);
        }
    }

    get(key) {
        return this[key];
    }

    delete(key) {
        if (this.hasOwnProperty(key)) {
            delete this[key];
        } else {
            console.log('Nothing to delete.');
        }
    }

}
