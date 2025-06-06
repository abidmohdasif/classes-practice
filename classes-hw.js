const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    class Calculator {
      add(x, y) {
        return (x+y)
      }
      subtract(x, y) {
        return (x-y)
      }
    }

    let thing = new Calculator();
    log(thing.add(13, 4));
    log(thing.subtract(10, 6));
    // Problem 1:
    // Create a class called Calculator with two methods:
    //  - add(x, y): returns the sum of x and y
    //  - subtract(x, y): returns the result of x minus y
    // Then create an instance and call both methods.

    // Write your class and code here
  },
  function problem2() {
    class Person {
      constructor() {
        this.name = null;
      }
      setName(name) {
        this.name = name;
      }
      getName() {
        return this.name;
      }
    }

    let thing = new Person();
    thing.setName("Abid")
    log(thing.getName())
    // Problem 2:
    // Create a class called Person with two methods:
    //  - setName(name): sets a property called name
    //  - getName(): returns the name
    // Then create an instance, set the name to your name, and log it using getName().

    // Write your class and code here
  },
  function problem3() {
    class Bird {
      fly() {
        log("Flying")
      }
    }

    class Penguin extends Bird {
      fly() {
        log("Penguins can't fly")
      }
    }

    let thing1 = new Bird()
    let thing2 = new Penguin()
    thing1.fly()
    thing2.fly()
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    // Then create one Bird and one Penguin, and call their fly() methods.

    // Write your class and code here
  },
  function problem4() {
    class Shape {
      describe() {
        log("I'm a shape")
      }
    }

    class Circle extends Shape {
      describe() {
        log("I'm a circle")
      }
    }

    class Square extends Shape {
      describe() {
        log("I'm a square")
      }
    }

    let thing2 = new Circle()
    let thing1 = new Square()
    thing2.describe()
    thing1.describe()
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    // Create two subclasses: Circle and Square
    // - Circle's describe() method logs "I'm a circle"
    // - Square's describe() method logs "I'm a square"
    // Then create instances of Circle and Square and call their describe() methods.

    // Write your class and code here
  },
  function problem5() {
    class Employee {
      work() {
        log("Working...")
      }
    }

    class Manager extends Employee {
      hireEmployee() {
        log("Employee hired");
      }
    }
    let thing = new Manager();
    thing.hireEmployee()
    thing.work()
    }
    
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    // Then create an instance of Manager, and call both methods.

    // Write your class and code here

];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
