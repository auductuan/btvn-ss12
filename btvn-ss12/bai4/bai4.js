"use strict";
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log(`Brand: ${this.brand}`);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log(`Author: ${this.author}`);
    }
}
let electronic = new Electronic("phone", 1, "Apple");
electronic.printInfo();
let book = new Book("Nhà giả kim", 2, "Paulo Coelho");
book.printInfo();
