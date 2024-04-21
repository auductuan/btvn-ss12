"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Name:", this.name);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
let cat1 = new Cat("Meow");
cat1.printName();
cat1.makeNoise();
let dog1 = new Dog("Dog");
dog1.printName();
dog1.makeNoise();
