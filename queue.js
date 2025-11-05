class Queue {
    constructor() {
        this.items = []
    };

    enqueue(value) {
        this.items.push(value)
    };

    dequeu() {
        if (this.isEmpty()) {
            return undefined
        };

        return this.items.shift();
    };

    peek() {
        if (this.isEmpty()) {
            return undefined
        };
        return this.items[0];
    };

    isEmpty() {
        return this.items.length === 0;
    };

    print() {
        console.log(this.items);
    }
}