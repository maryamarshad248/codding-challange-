'use strict';

/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never do this
  //this.calcAge = function () {
  //console.log(2024 - this.birthYear);
  //};
};
// 1. object {} is created
// 2. function is called, this= {}
// 3. link {} to prototype
// 4. function automatically return {}

const Maryam = new Person('Maryam Arshad', 1996);
console.log(Maryam);

const Noman = new Person('Noman Ejaz', 1996);
console.log(Noman);

console.log(Noman instanceof Person);
console.log(Maryam instanceof Person);

/////////////////////////////////////////////////////////////

// prototype
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
Maryam.calcAge();
Noman.calcAge();

console.log(Maryam.__proto__);
console.log(Noman.__proto__);

console.log(Maryam.__proto__ === Person.prototype);
console.log(Noman.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Maryam));
console.log(Person.prototype.isPrototypeOf(Noman));
console.log(Person.prototype.isPrototypeOf(Person));

////// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(Maryam, Noman);

console.log(Maryam.hasOwnProperty('birthYear'));
console.log(Noman.hasOwnProperty('firstName'));
console.log(Maryam.hasOwnProperty('species'));
console.log(Noman.hasOwnProperty('species'));
console.log(Maryam.__proto__.__proto__);
console.log(Noman.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);



////////////////////////////////////////////////////////
//// prototypal inheritance on built in objects

const arr = [2, 3, 2, 4, 3, 5, 6, 7, 6, 9, 8, 9, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
*/
/////////////////////////////////////////////////////////////////////

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelrate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelrate();
bmw.brake();
mercedes.accelrate();
mercedes.brake();
