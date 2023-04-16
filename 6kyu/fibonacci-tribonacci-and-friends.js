// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence


// (Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34]);
// (Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
// (Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]);
// (Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
// (Xbonacci([1,0,0,0,0,0,0,0,0,0],20),[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);
// })

function Xbonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-signature.length).reduce((p,c) => p + c, 0);
    }
    return result;
    
  }