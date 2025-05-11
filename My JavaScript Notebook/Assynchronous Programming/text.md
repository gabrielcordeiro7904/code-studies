INTRODUCTION: CALLBACKS ------------------------------------
Some functions provided by JavaScript host environments that allow asynchronous actions.
For instance, setTimeout function or loadScript(src) function. If there's any code below loadScript(), it doesn't waits for the script load to finish.


PROMISE -------------------------------------------
The function passed to 'new promise' is called the executor. When new promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.
Its arguments 'resolve' and 'reject' are callbacks provided by JavaScript itself.
When the executor obtains the result, be it soon or late, doesn't matter, it should call one of these callbacks:
    -resolve(value) - if the job is finished sucessfully, with result 'value'.
    -reject(error) - if an error has occurred, error is the error object.
To summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls 'resolve' if it was successful or 'reject' if there was an error.
The 'promise' object returned by 'new promise' constructor has these internal properties:
    -state -initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
    -result - initially "undefined", then changes to 'value' when resolve(value) is called or 'error' when reject(error) is called.

CONSUMERS: then, catch --------
A Promise object serves as a link between the executor and the consuming functions, which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.

.then() - The most important method is .then(function(result){}, function(error){}) .
The first argument of .then is a function that runs when the promise is resolved and receives the result.
The second argument of .then is a function that runs when the promise is rejected and receives the error.

.catch() - If only interested in errors, then .catch(errorHandlingFunction) is the best suited method.
It's possible with .then(null, function(error){}), but the syntax is longer.
.catch() is simply a shorter syntax.








ASSYNC/AWAIT -----------------------------------------
This is a special syntax to work with promises in a more comfortable fashion, called "async/await". It's suprisingly easy to understand and use.

Async functions: when placed before a function it means: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

Await keyword: this keyword makes JavaScript wait until that promise settles and returns its result.