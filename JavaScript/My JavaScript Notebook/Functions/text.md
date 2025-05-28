FUNCTION DECLARATION -------------------------------------------------------------------------------------------------------------
In function declarations you just "declare" the function. Functions declarations are always on top of the program flow.
Syntax: function calcAge1(birthYear) {
    return 2037 - birthYear};

FUNCTION EXPRESSION --------------------------------------------------------------------------------------------------------------
A function expression is stored inside a variable, the variable will work as an identifier for the function.
Syntax: const calcAge2 = function(birthYear) {
    return 2037 - birthYear};

ARROW FUNCTIONS ------------------------------------------------------------------------------------------------------------------
A shorter syntax for functions. It's assigned a variable to a function expression, the expression consists of: (arg1, arg2) => {blockOfCode};