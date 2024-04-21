"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Quadrangle {
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    calculatePerimeter() {
        return 4 * this.width;
    }
}
let rectangle = new Rectangle(5, 3);
console.log(rectangle.calculatePerimeter());
let square = new Square(4);
console.log(square.calculatePerimeter());
