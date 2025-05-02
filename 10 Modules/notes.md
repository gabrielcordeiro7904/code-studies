Modules are pieces of program that specifies which other pieces its relies on and which functionaligy it provides for other modules to use (its interface).

A good module system requires modules to specify which code they use from other modules. These releations are called DEPENDENCIES. If a module A uses code from module B, module A is said to be dependent on module B.

## ES Modules
The original JavaScript language did not have any concept of a module. Thats why i hate it.

Since ECMAScript 2015, JavaScript supports two different types of programs:
CommonJS modules: created by the community and adopted by the NodeJS enviroment, it was the starndard until ES6 "the modern javascript"
That was a work-around to the fact that scripts behaved with only global scope and function AND NO WAY to directly reference other scripts.

CommonJS introduces features such as the `require()` function and `exports{}` object; 
CommonJS Modules Example:
    `const circle = require (./circle.js)`
    circle.js content:
        const { PI } = Math;

        exports.area = (r) => PI * r ** 2;

        exports.circumference = (r) => 2 * PI * r;    

## ESModules
created by ECMAScript, modules get their own separate scope and the inport and export keywords, which weren't available in scripts, to declare their dependencies and interfaces. This module system was released in ES6 2015 "the modern JavaScript".

A modular program is composed of a number of such modules, wired together via their imports and exports.