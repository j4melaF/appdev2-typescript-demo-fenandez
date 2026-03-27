"use strict";
// console.log("Hello World!")
let userName = "Jamela";
let userAge = 21;
// ...
userAge = 21;
console.log(`Username - ${userName}`);
console.log(`Age - ${userAge}`);
function add(a, b = 5) {
    return a + b;
}
add(10);
// add('10')
add(10, 6);
// add(10, '6')
