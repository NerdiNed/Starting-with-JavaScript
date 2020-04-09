// var x = 5    /* es wird kein semicolon mehr gebraucht in JS */
// x = 8       /* das überschreibt den variablen wert 5  */

// x++  /*ist das gleiche wie x = x+1  */
// x + = 1 /*ist das gleiche wie x = x+1  */
// x-- /* x = x-1 */
// x- = 1 /* x = x-1 */
/* all the above works ONLY with numbers. not with text ! if you do that it will show you NaN which means= not a number */


{

    let x = 6
    {
 
        let x = 5
        console.log(x) 
    }

   

    console.log(x) 


}


