"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}
let student = new Student("Tung", 123);
student.displayInfo();
let teacher = new Teacher("Truong", "English");
teacher.displayInfo();
