abstract class Quadrangle {
    constructor(protected width: number, protected height: number) {}
    abstract calculatePerimeter(): number;
}

class Rectangle extends Quadrangle {
    calculatePerimeter(): number {
        return 2*(this.width + this.height);
    }
}

class Square extends Quadrangle {
    calculatePerimeter(): number {
        return 4*this.width;
    }
}

let rectangle = new Rectangle(5, 3);
console.log(rectangle.calculatePerimeter());

let square = new Square(4);
console.log(square.calculatePerimeter());
