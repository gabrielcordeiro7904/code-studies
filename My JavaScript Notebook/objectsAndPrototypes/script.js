'use strict';
// CONSTRUCTOR FUNCTION ----------------------------------------------------------------------------------------------------------------
let Person = function(age, degree) { //constructor function, creates instances of a prototype 
    this.age = age; //'this' assign age to newly created object property
    this.degree = degree;
};

// PROTOTYPE ASSIGNMENT ----------------------------------------------------------------------------------------------------------------
Person.prototype.hates = "Noise" //This assign a property to the Person prototype;

// PROTOTYPE INSTANCE ------------------------------------------------------------------------------------------------------------------
let Gabriel = new Person(20, `Computer Engineering`); //constructor function USES 'new' keyword to create an instance
console.log(Gabriel);

