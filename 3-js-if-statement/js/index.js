
let x = 5
let y = 10

if (x > y )  //  to connect the scopes with  this i have to write if before the variable x>y with ()
// an if statement doesn't need the else.. you can only say: if this is true than do this. but i don't care for the else.. so else is not mandatory
// first scope 
{
  console.log( "yea yea it is true")
}
 else    //  to connect the scope with the second one to see if its true or false i have to connect it with else 
// second scope
{
    console.log( "nope, its not")

}



// let x = 5
// let y = 10

// if (x > y )  

// console.log( "yea yea it is true")
// console.log( "nope, its not")
// if i have no scope the first comment is connected (related) to the statement and the second comment will be run anyway because it is an independent line



let x = 5
let y = 10
let z = x>y

if (!z) //  ausrufezeichen heisst : when its not ! wenn es falsch ist dann 
{
console.log( "yea yea it is true")
console.log( "nope, its not")
}