abstract class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract displayInfo(): void;
}

class Student extends Person {
    id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}

class Teacher extends Person {
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}

let student = new Student("Tung", 123);
student.displayInfo();

let teacher = new Teacher("Truong", "English");
teacher.displayInfo();
