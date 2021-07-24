function titleCase(str) {

    
    let newStr = str.toLowerCase().split(' ')
    
    for(let i = 0; i < newStr.length; i++){
    
    newStr[i] = newStr[i][0].slice(0,1).toUpperCase() + newStr[i].slice(1)
    
    
    }
      
      return newStr.join(' ')
    }
    
    //console.log(titleCase("I'm a little tea pot"));


    /* Recreation of Split

    Split takes a string value and creates an array of string values divided by the argument given and does no alteration to the given string

    */

    function splitStr(value, arg) {
        let str = []
        
        for (let i = 0; i < value.length; i++) { //use a while loop too dum dum
            if (value.slice(i, i + arg.length) == arg) {
                str.push(value.slice(0, i)) /* pushing into empty array str and trying to find a space in the value.*/
                value = value.slice(i + arg.length) // could also put in value.length
               console.log(i, value)
               i = 0
            }
            
        }
        str.push(value) // push in whatever is left over
        console.log(str)
      }
      splitStr("I'm a little tea pot", " ")
      
    function splitStr2(val,arg) {
    
        //while(value.indexOf(arg) != -1)
    let valArr = []
        
    let i = 0

    let arrA = []

    let testVal 

    while (i < val.length && val[i] != arg) {
        
        arrA.push(val[i])

        i++

    }

    for (let i = 0; i < arrA.length; i++) {
       
        if (arrA != undefined) {
            
         testVal =  arrA[i] + arrA[i+1]

        }
        
    }

  return testVal



    }

    console.log(splitStr('I\'m a little tea pot', ' '));
    
    /* Recreation of Join

    Join takes an array of string values and creates a singles string based off the arugments givin without altering the original data

    */