function Animal() {}
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// console.log(Bird.prototype)
// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
duck.constructor
let beagle = new Dog();
beagle.constructor

console.log(Bird.prototype)
