const name: string = "John";
const age: number = 25;
const isStudent: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Is a student: ${isStudent}`);


function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(5, 10)); // Output: 15

interface User {
    id: number;
    name: string;
    email: string;
}

class Person implements User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getDetails(): string {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}

const user = new Person(1, "Jane", "jane@example.com");
console.log(user.getDetails());
