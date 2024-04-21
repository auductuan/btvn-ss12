"use strict";
// Phân biệt abstract class và class:
//Lớp trừu tượng (Abstract class):
// Được sử dụng khi bạn muốn định nghĩa các phương thức mà các lớp con cần phải triển khai.
// Không thể tạo đối tượng trực tiếp từ lớp trừu tượng.
// Được ký hiệu bằng từ khóa abstract class.
// Lớp (Class):
// Được sử dụng khi bạn muốn tạo các đối tượng cụ thể.
// Có thể tạo đối tượng trực tiếp từ lớp.
// Được ký hiệu bằng từ khóa class.
// Khi sử dụng:
// Sử dụng lớp trừu tượng khi bạn muốn định nghĩa các phương thức chung mà các lớp con cần phải triển khai, hoặc chia sẻ code giữa các lớp con.
// Sử dụng lớp thông thường khi bạn muốn tạo ra các đối tượng cụ thể với dữ liệu và hành vi riêng của chúng.
// Ví dụ về class:
class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("meo meo");
    }
}
let animal = new Animal("Animal");
console.log("Name:", animal.name);
animal.sound();
// Ví dụ về abstract class:
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Name:", this.name);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woo woo");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow meow");
    }
}
let dog = new Dog("Doggy");
dog.printName();
dog.makeSound();
let cat = new Cat("Kitty");
cat.printName();
cat.makeSound();
xx;
