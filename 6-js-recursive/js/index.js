// function hopla(num) {
//     if (num == 0){
//        return num
// } else {
//     console.log(hopla(num -1))
//     return num
// }

// }
// hopla(8)


// function hopla(num) {
//     if (num == 0){
//         console.log(hopla(num -1))
// }
// return num
// }


// hopla(8)

// function add (num){
//     if (num == 0){
//         return 0
//     } else {
//         return add(num-1) + num
//     }
// }

// console.log(add(2))

// ein kürzerer weg es zu schreiben, weil man braucht KEIN else in diesem fall

// function add(num){
//     if (num==0) {
//         return 0
//     }

//     return add(num - 1) + num
// }


function factor(num){
    if (num == 1){
        return 1
    } else {
        return factor(num -1 ) * num
    }
}

console.log(factor(5))


