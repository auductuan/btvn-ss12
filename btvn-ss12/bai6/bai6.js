"use strict";
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        return 0;
    }
}
class InternEmployee extends Employee {
    constructor(name, workHour) {
        super(name, "Intern");
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}
class OfficialEmployee extends Employee {
    constructor(name, overtimeWage) {
        super(name, "Official");
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
let intern = new InternEmployee("truong", 100);
console.log("Intern Salary:", intern.calculateSalary());
let official = new OfficialEmployee("tung", 4000);
console.log("Official Salary:", official.calculateSalary());
