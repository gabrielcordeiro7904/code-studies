Every object supports 'for...in' loops, but they are slower than 'for...of' loops and iterate through non-numeric indexes, essencially iterating through every key in an array-like object.
To be able to implement 'for...in' loops, it's needed to define a Symbol.iterator method into the object, as it's used in 'for...in' loops.
Every object is iterable, but may not be iterated like an array without Symbol.iterator method!

Objects that use for...of loops have a special built-in symbol-method for this purpose, the Symbol.iterator .
    1 - When 'for...of' loop starts, it calls that method (Symbol.iterator) once. The method must return an iterator - an object with the method 'next()' .
    2 - Onward, the loop only works with that returned object.
    3 - When the loop wants the next value, it calls next() on that object.
    4 - The result of next() must have the form of {done : boolean, value : any}, the loop stops if done=true, otherwise value is the next value