
function sayHello (blabla, blaNumber) {
console.log("hello world")
console.log("hello " + blabla + " " + blaNumber + " times")
/* sayHello() when i call the funktion inside the scope and call it outside, it will call itself in an infinite loop- if i don't call it outside nothing will be written because its not called at all- */
}

sayHello("neda", 5)


function sum (num1, num2){
let blaResult = num1 + num2
return blaResult /* you can only return ONE result ! man kann nicht mehrere results abfragen mit einem komma zb ... and if the function has not return it will be undefined !!!*/
console.log(blaResult)
}

let blaResult = sum(3, 5)
console.log(blaResult)
