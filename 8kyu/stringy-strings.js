function stringy(size) {
    // your code here
    let res = ""
    for(let i=0;i<size;i++){
      console.log(i)
      if(i%2==0){
        res +="1"
      }else{
        res += "0"
      }
    }
    return res
  }

  const stringy = size => "10".repeat(size).slice(0,size);