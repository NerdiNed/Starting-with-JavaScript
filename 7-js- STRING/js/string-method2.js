let str = "hello world"
// search is like index of.. but you cant pass a second parameter for example to set where it has to start the search, like in index
//console.log(str.search("l"))


console.log(str.slice(6, 11))

// slice will show you the slice of the string you are asking for.. for example 6-11 means it will display the section starting from the position 6 till 11. which in this case is:  world

console.log("/////////////////")


// Aufgabe : i want to know on which position/index the second word of my string starts
// function findIndex(bla){
//      return bla.indexOf(" ") + 1
// }

// console.log(findIndex("hi my name is ...."))


// same as above with arrow function : 

// let findIndex = txt => {
//     return txt.indexOf(' ') + 1
// }

// console.log(findIndex("hi my name is ...."))


// let findIndexThird = txt => {
//    let firstSpaceInx= txt.indexOf(" ") 
//    let secondSpaceIdx = txt.indexOf(" ",firstSpaceInx +1 )
//    return secondSpaceIdx +1
// }

// console.log(findIndexThird("hello my name is ahmad"))

// shorter version of writing the same as above :

// let findIndexThird = txt => {
   
//     return txt.indexOf(" ", txt.indexOf(" ") +1 ) +1  
//  }
 
//  console.log(findIndexThird("hello my name is ahmad"))

// die untere lösung ist das gleiche wie oben 

let findIndexThird = txt => {
   
    return txt.indexOf(" ", findIndexSecond(txt) ) +1  
 }
 
 console.log(findIndexThird("hello my name is ahmad"))

 console.log ("//////////////////////////")

