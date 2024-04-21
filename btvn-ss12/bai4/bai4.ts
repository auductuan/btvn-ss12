class Product {
    constructor(public name: string, public id: number) {}
    printInfo(): void {
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}

class Electronic extends Product {
    constructor(name: string, id: number, public brand: string) {
        super(name, id);
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Brand: ${this.brand}`);
    }
}

class Book extends Product {
    constructor(name: string, id: number, public author: string) {
        super(name, id);
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Author: ${this.author}`);
    }
}

let electronic = new Electronic("phone", 1, "Apple");
electronic.printInfo();

let book = new Book("Nhà giả kim", 2, "Paulo Coelho");
book.printInfo();
