//   16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digitalRoot(n) {
 
    let arr = String(n).split("")
    
    let sum =  arr.reduce((acc,c)=>acc+Number(c),0)
    while(sum>9){
      sum = String(sum).split("").reduce((acc,c)=>acc+Number(c),0)
      
    }
    return sum  
    
  }

//efficient soution
