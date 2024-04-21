class Employee {
    constructor(protected name: string, protected role: string) {}
    calculateSalary(): number {
        return 0;
    }
}

class InternEmployee extends Employee {
    constructor(name: string, private workHour: number) {
        super(name, "Intern");
    }

    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

class OfficialEmployee extends Employee {
    constructor(name: string, private overtimeWage: number) {
        super(name, "Official");
    }

    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

let intern = new InternEmployee("truong", 100);
console.log("Intern Salary:", intern.calculateSalary());

let official = new OfficialEmployee("tung", 4000);
console.log("Official Salary:", official.calculateSalary());
