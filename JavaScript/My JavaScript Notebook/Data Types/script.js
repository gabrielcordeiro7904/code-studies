// ARRAYS ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Objects allow data to be stored in collections of keyed pairs. But quite often there's need for an ORDERED COLLECTION, where there is 1st, 2st, 3st element and so on.
// Array is the special data structure that allows ordered collection of data, they are dynamic (change in lenght) and heterogeneous (stores multiple data-types).
// An array expression is made with square-brackets with the data inside [1, 2, 3, 4, 5, ...]
// Arrays syntax comes from objects, where the square-brackets hold the keys. 
// Arrays extend objects by providing methods to work with ordered collections of data and also the length property. But at the core it's still an object.
// Remember there's only 8 basic data-types in JavaScript, array is an object and thus behave like one.

// length METHOD gives the number of elements. Keep in mind that arrays start at 0, the last index is (length - 1).

// ADDING AND REMOVING METHODS:
// pop METHOD takes an element from the end.
// push METHOD adds an element to the end.
// shift METHOD extracts the last element.
// unshift METHOD inserts an element to the end the array 
// pop/push METHODS are faster than shift/unshift METHODS, because the latter algorithm is longer.
// splice METHOD

// at METHOD gets element at a certain index of the array.

// DO NOT COMPARE ARRAYS WITH equality operator ==
// In JavaScript two objects are equal only if they reference to the same object.
// It's possible if an object compared to a primitive gets coerced to a primitive and thus evaluated true (not possible with strict equality ===). 
// Arrays are always diferent objects, so they will never get evaluated true.
// To compare arrays, refer to a item-by-item iteration algorithm, with iteration methods from JavaScript. 

// ITERABLES ------------------------------------------------------------------------------------------------------------------------------------------------------------


// MAPS & SETS ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Until now, only objects and arrays have been discussed, but they're not enough on their own for real-life.
// Thats why Maps and Sets also exist.

// MAPS -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Map is a collection of keyed items, just like an Object, but the keys are not limited to string data-type.
// In maps, the keys can be of any data-type, they can even be objects them selves.
// Map data-structures also have their own set of native methods and properties, which will not be shown here for the sake of conciseness.
// --Using objects as keys is the most NOTABLE AND IMPORTANT feature of this data-structure. String as a key in object is fine, but with Maps we can use another object
// as a key in object. 

// SETS -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --Sets are another special data-structure: they are set of values (the values can be of any data-type, including objects), without keys, which the main feature is the fact
// they dont store duplicate values.
// Thats useful when you dont want duplicates, for example in a party: people visit your party, come & go but you dont want to remember how many times someone visited your party.
// An alternative would be an array and an algorithm to check for duplicates, but the performance would be much worse.
// Sets are much more optimized internally for uniqueness checks.


// DATE & TIME
// Another data type that stores data, time and provides methods for date/time management.
// 