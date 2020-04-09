//  function textAdd (num){
//     if(num==0){
//          return num
//      } else {
//          console.log(num + ','+ (num -1)+ ',' + (num -2) + ',' + (num -3) + ',' + (num -4))
//         return textAdd(num-1)
//      }
//  }

//  textAdd(5)


// function textAdd (num, i){
//     if(num==0){
//         return num
//     } else  {
//         console.log(num + ','+ (num -(i+1)))
//         return textAdd(num )
//     }
// }

// textAdd(5, )

//  function textAdd (num, i){
//      if(num == 0){
//         return num
//      } else {
//          console.log(num + ','+ (num -(i+1)))
//        return textAdd(num )
//     }
// }

// textAdd(5,)

// function textAdd (num){
//     if(num==0){
//          return num
//      } else {
//          let x= num + ',' +(num-1)
//          console.log(x)
//         return x
//      }
//  }

//  textAdd(5)

// function textAdd (num){
//     if(num==0){
//          return num
//      } else {
//          let x= (num-1) + ',' + num
//          console.log(x)
//         return x
//      }
//  }

//  textAdd(5)


// function textAdd (num){
//     if(num==0){
//          return num
//      } else {
//          let x= (num-1) + ',' + num
//          return x
//      }
//  }

//  console.log(textAdd(5))

// die letzte lösung ist genau wie die drüber, nur mit einer LINE weniger, weil ich direkt return txtAdd machen kann und return x nicht brauche

function txtAdd(num){
    if(num==0){
        return num
    }else {
        return txtAdd(num-1)+","+num
    }
    }
console.log(txtAdd(5))

/* ist es das Komma  " , " das am ende verhindert, ( weil es ein string ist) das die zahl sich mit sich selbst addiert am ende? als "," + num und somit am ende als 5 angezeigt wird und bei jeder subtrahierung mit einem Komma getrennt wird? 2,3,4,5
also das Komma verhindert die weitere addierung mit der vorhergegangenen rechnung */




console.log("//////////////////////////")
// AHMAD LÖSUNG :

// function txtAdd(num){
//     if(num==0){
//         return num
//     }else {
//         return txtAdd(num-1)+","+num
//     }
//     }
// console.log(txtAdd(9))



function txtAdd(num){
    if(num==0){
        return num
    }else {
        return txtAdd(num-1)+","+num
    }
    }
console.log(txtAdd(9))

console.log("////////////////")

//this is the arrow version of the solution above.. arrow is a short cut version of a function 

let arrowTextAdd = num =>{ 
    if (num==0) {
    return num 
    } else { 
    return arrowTextAdd(num-1) + ',' + num 
} 
}

console.log(arrowTextAdd(5))