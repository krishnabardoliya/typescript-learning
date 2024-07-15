// Define an abstract class
abstract class Animal {
    // Abstract method (does not have an implementation)
    abstract makeSound(): void;
  
    // Concrete method (has an implementation)
    move(): void {
      console.log('Moving...');
    }
  }
  
  // Define a subclass that extends the abstract class
  class Dog extends Animal {
    // Provide an implementation for the abstract method
    makeSound(): void {
      console.log('Woof! Woof!');
    }
  }
  
  // Define another subclass that extends the abstract class
  class Cat extends Animal {
    // Provide an implementation for the abstract method
    makeSound(): void {
      console.log('Meow! Meow!');
    }
  }
  
  // Create instances of the subclasses
  const dog = new Dog();
  const cat = new Cat();
  
  // Call the methods
  dog.makeSound(); // Output: Woof! Woof!
  dog.move();      // Output: Moving...
  
  cat.makeSound(); // Output: Meow! Meow!
  cat.move();      // Output: Moving...