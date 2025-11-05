class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++
    };

    print() {
        let currentNode = this.head;
        const arr = [];

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr.join(' --> '), '--> null');
    }
}


const linkedList = new LinkedList();

linkedList.append(2)
linkedList.append(4)
linkedList.append(6)

linkedList.print();