// FUNCTION DECLARATION ----------------------------------------------------
// you just "declarate"
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2004);
console.log(`${age1}, this was a function declarion used by a variable`);

// FUNCTION EXPRESSION -----------------------------------------------------
// a function expression is stored inside a variable

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
let age2 = calcAge2(2004);
console.log(`${age2}, this is the result of a function expression assigned to variable "calcAge2","calcAge2" became the name of the function because it is assigned to it, age2 was assigned to the function "calcAge2" at a certain parameter and then i logged it into the console.`);

// ARROW FUNCTIONS ---------------------------------------------------------

const calcAge3 = birthYear => 2037 - birthYear; // birthYear is an argument
const age3 = calcAge3(2004);
console.log(`Your age in 2037 will be: ${age3}.`);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName}, in 2037 you will work more ${retirement} years!`
};

console.log(yearUntilRetirement(2004, `Gabriel`));