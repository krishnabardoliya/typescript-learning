"use strict";
// Define an abstract class
class Animal {
    // Concrete method (has an implementation)
    move() {
        console.log('Moving...');
    }
}
// Define a subclass that extends the abstract class
class Dog extends Animal {
    // Provide an implementation for the abstract method
    makeSound() {
        console.log('Woof! Woof!');
    }
}
// Define another subclass that extends the abstract class
class Cat extends Animal {
    // Provide an implementation for the abstract method
    makeSound() {
        console.log('Meow! Meow!');
    }
}
// Create instances of the subclasses
const dog = new Dog();
const cat = new Cat();
// Call the methods
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Moving...
cat.makeSound(); // Output: Meow! Meow!
cat.move(); // Output: Moving...
