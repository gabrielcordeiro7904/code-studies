// INTRODUCTION: CALLBACKS
// Some functions provided by JavaScript host environments that allow asynchronous actions.
// For instance, setTimeout function or loadScript(src) function.


// function loadScript(src, callback ) {
//   // creates a <script> tag and append it to the page
//   // this causes the script with given src to start loading and run when complete
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// };

// loadScript('/my/script.js', function() {newFunction();});