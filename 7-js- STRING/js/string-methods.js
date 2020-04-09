


//length is a string property it will return to us the number of characters used

//there is a difference between property and method !

//method hat () wie eine function

// let x = "hello world"
// let len = x.length
// console.log(len)

// let idx = x.indexOf("l")
// console.log(idx)

//indexOf zeigt a die position/stellung des gesuchten buchstaben an ! dabei fängt es von null an zu zählen ! also "l" ist auf position 2 weil H auf null ist 

// let x = "hello world"
// let len = x.length
// console.log(len)

// let idx = x.indexOf("ahmad")
// console.log(idx)

// ahmad wird mit -1 angezeigt, weil es das nicht gibt in hello world.. wenn etwas nicht vorhanden ist, dann wird -1 angezeigt

// let x = "hello world"
// let len = x.length
// console.log(len)

// let idx = x.indexOf("wo")
// console.log(idx)

// wo ist auf position 6 hätte man es Wo mit großbuchstaben geschrieben, hätte er wieder -1 angezeigt, weil man darauf achten muss dass es genauso geschrieben wird. es ist case sensitive


let x = "hello world"
let len = x.length
console.log(len)

let idx = x.indexOf("l", 4) // es fängt ab der position 4 nach einem l zu suchen u dessen position/index anzuzeigen (also 9)
console.log(idx)

let lidx = x.lastIndexOf("l")
console.log(lidx)

//x.lastIndexOf("l") zeigt die position des letzten "l"s an 


