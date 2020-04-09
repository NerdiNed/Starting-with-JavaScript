// let x = 5
// let y = 6
// let z = y + x
// console.log(z)

// let x = "5"
// let y = 6
// let z = y + x
// console.log(z)
// wenn x als text deklariert ist, dann versucht JS ererstmal die fünf in eine nummer umzuwandeln ( was in diesem fall möglich ist, stünde da History, würde es NaN anzeigen) wenn man dann + benutzt steht da nicht 11 sondern 65.. weil es es nicht addiert sondern "joined"


// let x = 5
// let y = 6
// let z = y % x
// console.log(z)
// das prozentzeichen % zeigt das was übrigbleibt , wenn man 6 durch 5 teilt.. nämlich 1 . es wird modulo genannt
// als anderes beispiel : 
// let x = 4
// let y = 35
// let z = y % x
// console.log(z)
// die zahl 4 passt bis zur 32 requestAnimationFrame.apply.  was dann bis 35 übrig bleibt ist 3 und das wird dann angezeigt

// == checks the value
// === checks the type and the value ( in this case string)
// in this case == would be true but === would be false because the type of the value is string and cant equal y


// let x = 4
// let y = 5
// /* let z = y > x || y*y < x */
// let z = y > x && y*y < x
// console.log(z)
// || or 
// && and 

let x = 4
let y = 5
let z = (x+y)*3
console.log(z)

