// CODE STRUCTURE -------------------------------------------------------------------------------------------------------------------------------

// STATEMENTS
// statements are syntax constructs and commands that perform actions. They end in a semi-collon to signify end of statement.


// 'USE STRICT'  --------------------------------------------------------------------------------------------------------------------------------
// At ES5 release, new features were added and old features got modified. To enable the update its used the directive 'use strict' at the beggining of the code.
// This decision of a "switch" was for compatibility reasons: old code would need not to be modified.


// VARIABLES ------------------------------------------------------------------------------------------------------------------------------------
// Variables are used to store data.


// DATA TYPES -----------------------------------------------------------------------------------------------------------------------------------
// There are 8 basic data types in JavaScript.

// NUMBERS
// Number type represents both integers and floating point numbers.
// Besides regular numbers, there are "special numeric values" which stands for infinity, -infinity and NaN ("not a number").

// BIG INT
// This data type are for numbers that are greater than the safe range of [-(2**53 - 1) , (2**53 - 1)]. This is due to the fixed 64bits format of modern computers.

// STRINGS
// Strings in JavaScript are sorrounded by quotes. They represent words. There is also the back-tick version, which supports variable data.

// BOOLEANS (Logical Type)
// The boolean type has only two values: true or false.
// They have logical operators which will not be covered yet.

// "null" VALUE
// This special type does not belong to any of the types described above.
// It's just a special value which represents "nothing", "empty" or "value unknown".
// In JavaScript, null is not a "reference to a non-existent object" or a "null pointer" like in some other languages.

// "undefined" VALUE
// The special value "undefined" also stands apart. It makes a type of its own, just like null.
// The value of undefined is "value not assigned".
// If a variable is declared but no data is assigned, the value is undefined ("value not assigned").

// Objects and symbols
// The object type is special because it can store collections of data and more complex entities.
// All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever).
// Because of this IMPORTANCE, objects deserve a special treatment. They will have a section solely about them!
// The SYMBOL type is used to create unique identifiers to objects, its mentioned for the sake of completeness but the details are postponed to unique section for it.  

// THE 'typeof' OPERATOR
// The typeof operator returns the type of the operand. It's useful when we want to process values of diferent type diferently or just do a simple check.

// TYPE CONVERTIONS -------------------------------------------------------------------------------------------------------------------------------
// Most of the time, JavaScript statements coerces values to a compatible data type.
// But explicitly converting a value is also possible.

// STRING CONVERTION
// Converts a data-value to an equivalent string value.

// let value = true;
// console.log(string(value));

// NUMERIC CONVERTION
// it's used the 'number()' function

// BOOLEAN CONVERTION
// it's used the 'boolean()' function


// BASIC OPERATIONS ---------------------------------------------------------------------------------------------------------------------------------
// First it's going to be explained basic terms:
// -Operand: is what operators are applied to.
// -Unary: if it has a single operand.
// -Binary: if it has two operands.

// MATHS
// The following math operations are supported:
// -Addition +
// -Subtraction -
// -Multiplication *
// -Division /
// -Remainder %
// -Exponentiation **

// The first ones are straight foward, remainder and exponentiation operators need more description.

// -Remainder %: despite it's appearence, it's not related to percentages. The result of (a % b) is the remainder of division between a and b.
// -Exponentiation **: This operator 'a**b' raises 'a' to the power of 'b'.

// INCREMENT & DECREMENT
// These operations are common, it's useful to just use its operators
// -Increment ++
// -Decrement --
// Eg:
// let increment = 2
// increment ++ 2 //Now the value is FOUR!

// COMPARISONS
// -Greater/Less than 'a > b' 'a < b'.
// -Greater or equal/ less than or equal 'a>=b' 'a<=b'.
// -Equals: unstrict equality 'a==b'; strict equality 'a===b'.
// -Unequal: unstrict !=; strict !==.
// The result is always a boolean.