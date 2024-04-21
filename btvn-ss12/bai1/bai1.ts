abstract class Animal{
    constructor(public name: string) {}
    abstract makeNoise(): void;
    printName(): void {
        console.log("Name:", this.name); 
}
}
class Cat extends Animal { 
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal { 
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

let cat1 = new Cat("Meow"); 
cat1.printName();
cat1.makeNoise();

let dog1 = new Dog("Dog"); 
dog1.printName();
dog1.makeNoise();
