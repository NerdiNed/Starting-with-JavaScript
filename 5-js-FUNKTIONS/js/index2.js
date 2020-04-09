// let num1 = 2
// let num2 = 4
// let operation = "+"


function calc (operation, num1, num2){
    let result 
    switch (operation) {
        case "+":
             result = num1 + num2
          return result
             break
    
        case "*":
             result = num1 * num2
            return result
            break
    
        case "/":
             result = num1 / num2
            return result
                break
        
         case "-":
             result = num1 - num2
            return result
                    break
            
       
        
    }

}
//  calc("+", 2, 4)
//  console.log (calc("+", 2, 4))
  //calc("+", 2, 4)
  //console.log( calc("+", 2, 4))
  //calc("*", 2, 5)
 //console.log( calc("*", 2, 5))
 


// es kann wie oben oder wie unten geschrieben, dann muss calc("+", 2, 4) im  console.log (calc("+", 2, 4)) geschrieben werden um sichtbar zu sein, aber damit "rufe ich es nochmal ab !" also wenn ich es in console log schreibe muss ich das calc("+", 2, 4) kommentieren oder löschen, oder umgekehrt, weil es sonst doppelt abgerufen wird
// wenn ich es aber wie unten mit eine variable festlege/deklariere also let result = calc("*", 2, 9) (also let result is die variable) dann muss ich in console log nur die deklarierte variable schreiben also in diesem fall result : console.log(result)--- wenn ich ein zweites mal die funktion abrufen möchte, dann geht das wenn ich den namen der variable ändere, dann wird mir beides angezeigt.


 let result= calc("+", 2, 4)
 console.log(result)
let result2 = calc("*", 2, 5)
console.log(result2)

 


// function calc (operation, num1, num2){
    
//     switch (operation) {
//         case "+":
//             return num1 + num2
//             break
    
//         case "*":
//             return num1 * num2
//             break
    
//         case "/":
//              return num1 / num2
//              break
        
//          case "-":
//              return num1 - num2
//              break

//             default: 
//             return "is not a valid operation"
//             break
        
//     }

// }

// calc ("+", 2, 4)
// console.log (calc("+", 2, 4))