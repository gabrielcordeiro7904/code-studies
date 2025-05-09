ARRAYS ------------------------------------------------------------------------------------------------------------------------------------------------------------
    Objects allow data to be stored in collections of keyed pairs. But quite often there's need for an ORDERED COLLECTION, where there is 1st, 2st, 3st element and so on.
    Array is the special data structure that allows ordered collection of data, they are dynamic (change in lenght) and heterogeneous (stores multiple data-types).
An array expression is made with square-brackets with the data inside [1, 2, 3, 4, 5, ...], Arrays syntax comes from objects, where the square-brackets hold the keys. 
    Arrays extend objects by providing methods to work with ordered collections of data and also the length property. But at the core it's still an object.
Remember there's only 8 basic data-types in JavaScript, array is an object and thus behave like one.
    length METHOD gives the number of elements. Keep in mind that arrays start at 0, the last index is (length - 1).


ADDING AND REMOVING METHODS ---------------------------------------------------------------------------------------------------------------------------------------------------
    pop METHOD takes an element from the end.
    SYNTAX: arr.pop() - extrats an element from the end.

    push METHOD adds elements to the end.
    SYNTAX: arr.push(...items) - adds items to the end

    shift METHOD extracts the last element.
    SYNTAX: arr.shift() - extracts an item from the beginning. Is slower than arr.pop()

    unshift METHOD inserts elements to the end of array. 
    SYNTAX: arr.unshift(...items) - inserts elements to the beginning of array. 

    pop/push METHODS are faster than shift/unshift METHODS, because the latter algorithm is longer.


ARRAY LOOPS ----------------------------------------------------------------------------------------------------------------------------------------------------------------
'for...of' loops are the most optimized for arrays.
'for...in' loops technically works, but are 10x slower. In array-like objects they also return other non-numeric properties that don't act as indexes, such as properties and methods, making 'for...of' loops the best practice.


ARRAY LENGTH ----------------------------------------------------------------------------------------------------------------------------------------------------------------
The 'length' property automatically updates when the array is modified. To be precise, it counts the highest index + 1.


OTHER ADD/REMOVE METHODS ------------------------------------------------------------------------------------------------------------------------------------------------------

    arr.splice(start, deletecount, elemt1, elemt2) - splice METHOD serves to delete-count a n-number of elements at x-index and insert m-number of elements at their places.
    The delete keyword does not delete the index, only it's value. This behaviour comes from objects, where the key is not deleted. The ideal is to use splice method in arrays.

    arr.slice(start, end) - slice METHOD is much simpler than splice METHOD, it returns a sub-array copying from index start to end (not including end)

    arr.concat(arg1, arg2) - concat METHOD creates a new array including elements from arrays passed to the funtion and additional items.
    Normally it only adds elements from arrays, other objects are added as whole, not their elements.
    If the object has the property Symbol.isConcatSpreadable, the object is treated as an array.


ITERATE: forEach METHOD ------------------------------------------------------------------------------------------------------------------------------------------------------
    arr.forEach(function(item, index, array){ block-of-code }) - runs a function on each element of an array, with three possible arguments.


SEARCHING AN ARRAY ---------------------------------------------------------------------------------------------------------------------------------------------------
    
indexOf/lastIndexOf/includes METHODS:

    arr.indexOf(item, from) - looks for "item" starting from index "from", and returns the index where it was found, otherwise -1.

    arr.lastIndexOf(item, from) - it's the same as above, but looks from right to left.

    arr.includes(item, from) - looks for "item" starting from index "from" and returns true if found, otherwise false.

find/findIndex/findLastIndex METHODS:

    arr.find(function(item, index, array){}) - finds element in an array with a certain quality and returns the element, otherwise returns undefined.   

    arr.findIndex(function(item, index, array){}) - finds element in an array (just like find()) and returns the index, otherwise returns -1.

    arr.findLastIndex(function(item, index, array){}) - works like findIndex() but searches right to left.

    arr.filter(function(item, index, array){}) - is similar to find() but returns repeated results, just like a filter can return more than one result.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    DO NOT COMPARE ARRAYS WITH equality operator ==
    In JavaScript two objects are equal only if they reference to the same object.
It's possible if an object compared to a primitive gets coerced to a primitive and thus evaluated true (not possible with strict equality ===). 
Arrays are always diferent objects, so they will never get evaluated true.
To compare arrays, refer to a item-by-item iteration algorithm, with iteration methods from JavaScript. 