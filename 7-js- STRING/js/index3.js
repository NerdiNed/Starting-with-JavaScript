


// function indexFinder(txt, chr, start){
//         if( start < txt.length) {
//             let idx = txt.indexOf(chr, start)
//             console.log(idx)
//             indexFinder (txt, chr, idx + 1 ) 
//         }
        

// }

// indexFinder("hakuna Matata","a",0)

//zweites beispiel ist dafür falls der buchstabe beim nächsten mal nicht gefunden wird ( weil es ihn nur einmal gibt und -1 angezeigt wird) darum schreibt man ein zweites if-statment :  if (idx != -1) das heisst wenn idx NICHT = -1 ist, dann kannst du gehen , wenn es -1 ist hör auf)
function indexFinder(txt, chr, start){
    if( start < txt.length) {
        let idx = txt.indexOf(chr, start)
        if (idx != -1){
        console.log(idx)
        indexFinder (txt, chr, idx + 1 ) 
    }
    
  }
}

indexFinder("hakuna Matata","t",0)