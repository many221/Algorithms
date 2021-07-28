function fiboEvenSum(n) {

    let a = 1, b = 0, c = 0;
  
    let arr = []
   
    for (let i = 0; i <= n; i++){
  
      c = a + b;
  
      a = b;
  
      b = c;
  
      arr.push(c)
      
          }
  
    arr.shift()
  
  let evenNum = 0
  
    for(let i = 0; i < arr.length; i++){
  
      if(arr[i] % 2 == 0 && n >= arr[i]){
        
        evenNum += arr[i]
      
      }
  
    }
  
  
     return evenNum;
  
  }
  console.log(fiboEvenSum(8))