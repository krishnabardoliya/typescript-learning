// interface defines shape of an object


// interface syntax
interface Person {
    id: number;
    name: string
}


// read only and option in interface
interface Cat {
    readonly id: number,
    name: string;
    age?: number
}


// interface methods
interface Human {
    name: string;
    lastname: string;
    gender: string;
    greet: (name:string) => string; // way1: arrow function
    addTitles(): void // way3: normal function
}

const joe:Human = {
    name: "Joe",
    lastname: "Kate",
    gender: "male",
    greet(name: string) {
        return `Hi ${name}`;
    },
    addTitles() {
        // when want to access "this" should not be arraow function 
        this.name = `${this.gender === 'male' ? "Mr" : "Miss"} ${this.name}`
    }
}

joe.greet("Jake");
joe.addTitles();
console.log(joe.name)



// we can re-open interface and add new properties and function

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Product {
    discount: number;
    calculateFinalPrice(): number;
}

const laptop: Product = {
    id: 1217267,
    name: "Asus",
    price: 45000,
    discount: 10,
    calculateFinalPrice() {
        const finalPrice = this.price - ((this.price * this.discount)/ 100)
        return finalPrice;
    }
}

console.log(laptop.calculateFinalPrice());



// extend interface / inhertit interface

interface Dog {
    name: string;
    age: string;
    bark: string;
    breed: string
}

enum DogService {"sniffing" = "Drug sniffing", "bomgDetect" = "Bomb", "guide" = "Guide"}

interface ServiceDog extends Dog {
    service: DogService
}

const smoky = {
    name: "Smokey",
    age: 3,
    bark: "Woof! Woof!",
    breed: "Husky",
    service: DogService.guide
}

console.log(smoky.service);


// multiple inheritance

interface Home {
    name: string;
    owner: string
}

interface Address { 
    lat: number;
    long: number;
}

interface DataBase extends Home,Address {
    phone: number
}

const mydata: DataBase = {
    name: "Happy Cave",
    owner: "Joe",
    lat: 22.22,
    long: 23.45,
    phone: 123456789
}


console.log(mydata.name)

