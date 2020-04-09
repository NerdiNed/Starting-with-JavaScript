// switch only checks equality not "grater than etc etc.. only if its not this.. than it will check the other one to see if its that" if i would do the grater or smaller than 100 example.. i must make a case for every number until 100, because it can only check equality..

// let weather = "sunny"
let weather = "rainy"
// let weather = "windy"

switch (weather) {
    case "sunny":
    case "shiny": /* man kann auch cases gruppieren in dem man sie untereinander schreibt   */  
         console.log("wear a sunglasses")
         break

    case "rainy":
        console.log("carry an umbrella")
        break

    case "windy":
            console.log("go Kiting")
            break
    

    default:
            console.log("stay home and study web Dev")
            break
    
}