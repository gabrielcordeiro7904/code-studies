// OBJECTS
// --As we already know, there are eight data types in javascript. Seven of them are called primitive, because their value contains only a single thing (be it a string or whatever).
// --In contrast, objects are used to stored keyed collections of various data and more complex entites. In JavaScript, objects penetrate almost every aspect of the language.
// So we must understand them first before going in-depth anywhere else.
// --An object can be created with figure brackets {...} with an optional list of properties. A property is a "key: value" pair, where key is a string (also called a "property name")
// and a value can be anything
// --Usually, the figure brackets{} are used. That declaration is called an OBJECT LITERAL.

// LITERALS AND PROPERTIES
// --A property has a key/identifier before the colon ":" and a value to the right of it.
// --Properties can be created, deleted and read at any time...
// --To read it, simply refer to key with the following notation: "object.key"
// --To create, simply assign a key and a value to an object with the following notation: "object.key = value"
// --To delete, use the 'delete' operator with the following syntax: "delete user.key"

// SQUARE BRACKETS NOTATION
// For keys with multiple words the dot notation will not hold. For such cases, it's used the square brackets notation. Eg:
// object["key word"] = value
// Computed properties names are possible with the square brackets notation! The string-value of the key can be assigned via a variable that holds data from user-input.

// PROPERTIES LIMITATIONS
// In variables it's impossible to assign their names to JavaScript keywords ('for', etc..), but that limitation does not hold on objects.
// Properties can be named with keyword names. The only limitation is the .__proto__ property, as it cannot be assigned to non-object values.

// PROPERTY EXISTENT TEST, OPERATOR 'in'
// A notable feature of JavaScript, compared to other languages, is that it does not throw an error on case a non-existent property get accessed... it just returns undefined!


// GARBAGE COLLECTOR ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Memory management in JavaScript is performed automatically and invisible to us. We create primitives, objects, maps and sets, functions, all of which consumes memory.
// This section is about how JavaScript performs memory management.

// Reachability ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This is the fundamental concept in which JavaScript memory management relies on.
// Simply put, "reachable" value are those that are acessible or usable somehow. They are guaranteed to be in memory.
// 'Root' values are a set of inherently reachable values, that cannot be deleted for obvious reason:
// 1 - Currently executing function, its local variables and parameter;
// 2 - Other functions on current chain of nested calls, their local variables and parameters;
// 3 - Global variables;
// 4 - (some other internals, no relevant).
// Any other value is considered reachable if it's reachable from a root by a reference or by a chain of references.
