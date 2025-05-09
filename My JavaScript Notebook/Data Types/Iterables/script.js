// SYMBOL.ITERATOR

// let range = {
//     from: 1,
//     to: 5
//   };
  
//   // 1. for..of initially calls this
//   range[Symbol.iterator] = function() { //range iterator symbol-id gets assigned to the for...of algorithm
//     // ...it returns the iterator object:
//     // 2. Onward, for..of works only with the iterator object below, asking it for next values
//     return {
//       current: this.from,
//       last: this.to,
  
//       // 3. next() is called on each iteration by the for..of loop
//       next() {
//         // 4. it should return the value as an object {done:.., value :...}
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   };
  
//   // now it works!
//   for (let num of range) {
//     alert(num); // 1, then 2, 3, 4, 5
//   }


// Strings are built-in data-types that are iterable with 'for...of' loops!

// let myName = "Gabriel";
// for (let character of myName) {console.log(character)};

// It worked! Strings have Symbol.iterator built-in by default!

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Let's try to make an object be an array-like iterable!

let object = {
    1: "banana",
    2: "loves banana yooooo",
    range: {
        from: 1,
        to: 2, },
};

// Objects that use for...of loops have a special built-in symbol-method for this purpose, the Symbol.iterator .
//     1 - When 'for...of' loop starts, it calls that method (Symbol.iterator) once. The method must return an iterator - an object with the method 'next()' .
//     2 - Onward, the loop only works with that returned object.
//     3 - When the loop wants the next value, it calls next() on that object.
//     4 - The result of next() must have the form of {done : boolean, value : any}, the loop stops if done=true, otherwise value is the next value.

object[Symbol.iterator] = function(){
    return{
        current: this.range.from,
        last: this.range.to,
        next(){
            if (this.current <= this.last){
                return { done:false, value:this.current++}
            } else{ return {done:true} };
        }
    }
}

for (let key of object) {console.log (object[key])};