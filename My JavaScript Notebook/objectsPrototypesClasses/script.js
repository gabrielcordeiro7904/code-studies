'use strict';

// OBJECTS  ------------------------------------------------------------------------------------------------------------------------------
// Object literals are equivalent to object initializer. 
// Alternatively, its possible to instantiate an object through a constructor function and the new operator.

// Using object initializers:

// let Obj = {
//     property1 : value1,
//     property2 : value2,
// }

// Using a constructor function:

// let Person = function(name, birthYear, bachelors, career){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.bachelors = `${name}'s bachelors is ${bachelors} hehehehehe...`;
//     this.career = career;
//     this.age = 2024 - birthYear;
//     this.retirement = `${this.name} retires in ${60 - this.age} years! Yeyy :D`;
// }

// let Gabriel = new Person(`Gabriel`, 2004, `Computer Engineering`, `Web-Dev`);
// console.log(Gabriel.retirement);
// console.log(Gabriel.bachelors);


// CONSTRUCTOR FUNCTION ----------------------------------------------------------------------------------------------------------------

// let Person = function (age, degree) { //constructor function, creates instances of a prototype 
//     this.age = age; //'this' assign age to newly created object property
//     this.degree = degree;
// };


// PROTOTYPE ASSIGNMENT ----------------------------------------------------------------------------------------------------------------

// Person.prototype.hates = "Noise" //This assign a property to the Person prototype;


// PROTOTYPE INSTANCE ------------------------------------------------------------------------------------------------------------------

// let Gabriel = new Person(20, `Computer Engineering`); //constructor function USES 'new' keyword to create an instance
// console.log(Gabriel);


// ES6 CLASSES -------------------------------------------------------------------------------------------------------------------------
// Classes is syntatic sugar for constructor function, objects/instances and prototypes

// let PersonClass = class{
//     constructor(firstName, birthYear) {     //syntatic sugar for constructor functions
//         this.firstName = firstName;     //Person variable w/ object data-type, bc its assigned to a constructor function
//         this.birthYear = birthYear;
//     }
// };
// PersonClass.prototype.calcAge =  function(){2037 - birthYear};
// let Gabriel2 = new PersonClass(`Gabriel`, 2004);


// console.log(`Gabriel's age in 2037 will be: ${Gabriel2.calcAge}. This was created with ES6 classes.`);


// GETTERS & SETTERS  -------------------------------------------------------------------------------------------------------------------
//     --There are two kinds of object properties.
//     --The first kind is data properties. Its the ones used before.
//     --Thes second type is new. It's an accessor property. They are essentialy functions that execute on getting and setting a value, 
// but look like regular properties to an external code.
//     --They define property values INSIDE an object, by "getting/retrieving" a value or setting a value to a property.
//     --Getters & setters: Accessor properties are represented by "getter" and "setter" methods.
// In a object literal they are denoted by `get` and `set`:


// let Object = {
//     get propName() {
//         //getter, the code executed on getting obj.propName
//     },
//     set propName() {
//         //setter, the code executed on setting obj.propName = value
//     }
// }

//  --The GETTER works when obj.propName is read, the SETTER- when it is assigned.
//  --For instance, we have a user object with name and surname. 
//  --We want to add a `fullName` property, and not copy-paste it, 
//  so we can implement it as an accessor.


// let User = {
//     name: "john",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(name) {
//         [this.name, this.surname] = name.split(" "); //split string method
//     },
// };

// console.log(User.fullName); //John Smith
// User.fullName = "Alice Cooper";
// console.log(`${User.fullName}, this is the output from a setter function! It's all about manipulating data...`);

