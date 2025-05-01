Modules are pieces of program that specifies which other pieces its relies on and which functionaligy it provides for other modules to use (its interface).

A good module system requires modules to specify which code they use from other modules. These releations are called DEPENDENCIES. If a module A uses code from module B, module A is said to be dependent on module B.

ES Modules: The original JavaScript language did not have any concept of a module. Thats why i hate it.

Since ECMAScript 2015, JavaScript supports two different types of programs. 
Scripts behave in the old way: only global scope, NO WAY to directly reference other scripts. 
*Modules* get their own separete scope and support the inport and export keywords, which aren't available in scripts, to declare their dependencies and interfaces. This module system is called *ES modules* (where ES stands for ECAMScript).

A modular program is composed of a number of such modules, wired togetehr via their imports and exports.