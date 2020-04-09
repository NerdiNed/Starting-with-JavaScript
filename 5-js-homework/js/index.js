// function calc (opt, num1, "0") {
// if (num % 2==0){
//     console.log("true")
//     return result
// } else { 0 

// }
// }

function isEven(num) {
    if (num % 2== 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // console.log(isEven(10));
  

// console.log(20%5)
// TRUE and false are boolean values and should NOT be written in ""  return true;

function checkNumber(num){
  if(isEven(num)){
    console.log("it is a Even Number")
  } else { 
    console.log("it is a Odd Number")
  }
}
checkNumber(4) // checkNumber(4) kann auch oben auf der seite gecallt werden, der rechner erkennt es. reihenfolge ist egal
//man kann es so oder so aufschreiben
//console.log(checkNumber(4))