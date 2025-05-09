ARRAYS ------------------------------------------------------------------------------------------------------------------------------------------------------------
    Objects allow data to be stored in collections of keyed pairs. But quite often there's need for an ORDERED COLLECTION, where there is 1st, 2st, 3st element and so on.
    Array is the special data structure that allows ordered collection of data, they are dynamic (change in lenght) and heterogeneous (stores multiple data-types).
An array expression is made with square-brackets with the data inside [1, 2, 3, 4, 5, ...], Arrays syntax comes from objects, where the square-brackets hold the keys. 
    Arrays extend objects by providing methods to work with ordered collections of data and also the length property. But at the core it's still an object.
Remember there's only 8 basic data-types in JavaScript, array is an object and thus behave like one.
    length METHOD gives the number of elements. Keep in mind that arrays start at 0, the last index is (length - 1).

ADDING AND REMOVING METHODS ---------------------------------------------------------------------------------------------------------------------------------------------------
pop METHOD takes an element from the end.
push METHOD adds an element to the end.
shift METHOD extracts the last element.
unshift METHOD inserts an element to the end the array 
pop/push METHODS are faster than shift/unshift METHODS, because the latter algorithm is longer.

ARRAY LOOPS ----------------------------------------------------------------------------------------------------------------------------------------------------------------
'for...of' loops are the most optimized for arrays.
'for...in' loops technically works, but are 10x slower. In array-like objects they also return other non-numeric properties that don't act as indexes, such as properties and methods, making 'for...of' loops the best practice.

ARRAY LENGTH ----------------------------------------------------------------------------------------------------------------------------------------------------------------
The 'length' property automatically updates when the array is modified. To be precise, it counts the highest index + 1.

OTHER ADD/REMOVE METHODS ------------------------------------------------------------------------------------------------------------------------------------------------------

splice METHOD:
    delete keyword does not delete the index, only it's value. This behaviour comes from objects, where the key is not deleted. The ideal is to use splice method.
    splice METHOD serves to delete-count a n-number of elements at x-index and insert m-number of elements at their places.
    Syntax: arr.splice(start, deletecount, elemt1, elemt2)

slice METHOD:
    slice METHOD is much simpler than splice METHOD, it returns a  sub-array copying from index start to end (not including end).
    Syntax: arr.slice(start, end).

concat METHOD:
    concat METHOD creates a new array that includes elements from other arrays and additional items.
    Syntax: arr.concat(arg1, arg2).
    Normally it only adds arrays, other objects are added as whole. If the object has the property Symbol.isConcatSpreadable, the object is treated as an array.

ITERATE: forEach METHOD:
    allows a function to run by each element and its corresponding index and array of the array invoked forEach method.


SEARCHING AN ARRAY ---------------------------------------------------------------------------------------------------------------------------------------------------
    
indexOf/lastIndexOf/includes METHODS:
    arr.indexOf(item, from) - looks for "item" starting from index "from", and returns the index where it was found, otherwise -1.
    arr.lastIndexOf(item, from) - it's the same as above, but looks from right to left.

    arr,includes(item, from) - looks for "item" starting from index "from" and returns true if found, otherwise false.

find/findIndex/findLastIndex METHODS:



    at METHOD gets element at a certain index of the array.

    DO NOT COMPARE ARRAYS WITH equality operator ==
    In JavaScript two objects are equal only if they reference to the same object.
It's possible if an object compared to a primitive gets coerced to a primitive and thus evaluated true (not possible with strict equality ===). 
Arrays are always diferent objects, so they will never get evaluated true.
To compare arrays, refer to a item-by-item iteration algorithm, with iteration methods from JavaScript. 

