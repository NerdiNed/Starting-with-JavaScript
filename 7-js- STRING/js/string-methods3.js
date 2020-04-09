let str = "hello World"
console.log(str.slice(-11,-6))

console.log(str.substring(0,5))

//substring like slice but doesn't accept negative values or parameters

console.log(str.substr(5, 3))  // first character is the start, second one is how many characters i want more

console.log(str.replace('o', 'x')) // it only replaces the first found result


console.log(str.replace(/o/g, 'x')) // with slash / before and after the to be replacing thing and a g after you can replace all found results

// let str2 = " i love life, i love programming, i love you"
// console.log(str2.replace(/love/g, 'hate')) // this replaces all loves with hate. 

let str2 = " i love life, i love programming, i love you"
console.log(str2.replace(/i/ig,'you'))  // if it is with ig it is case sensitive.. it will change all I's in the string.. big or small and every where

let str3 = " i love life, i love programming, i love you"
console.log(str3.replace(/i /ig,'you ')) // with a space after the I it will change only the I's with a space after them and not the i's in a word


console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(" ", "hello Ahmad", str2 ))  // concat will group the two strings .. in this case the string of str the "space" and hello ahmad and what ever was set for str2

let str4 = " ahmad@ahmad-osman.com dagshagdhga "
console.log(str4.trim()) // trim will remove the white space in the beginning and the end of the string

console.log(str4.charAt(2)) // IS THE OPPOSITE OF INDEX.. IN THIS CASE YOU ENTER THE INDEX/NUMBER and it will tell you the character that is on that position.  while index tells you the number on which the character is standing

console.log(str4.charCodeAt(2)) 
//zeigt den ASCII code des zweiten charakters.. der ascii code von h ist 104... man kann es als feste tabelle im internet finden. der ascii code eines großbuchstaben ist ein anderer als kleinbuchstaben. 
//jeder buchstabe hat für den computer ein ascii code, weil buchstaben für den computer als solches nicht zu erkennen sind.