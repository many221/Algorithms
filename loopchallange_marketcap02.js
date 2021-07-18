/*
 
  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄         ▄         ▄     ▄▄▄▄     
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌       ▐░▌       ▐░▌  ▄█░░░░▌    
 ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀       ▄█░█▄▄▄▄▄▄▄█░█▄▐░░▌▐░░▌    
 ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌          ▐░░░░░░░░░░░░░░░▌▀▀ ▐░░▌    
 ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌           ▀█░█▀▀▀▀▀▀▀█░█▀    ▐░░▌    
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌            ▐░▌       ▐░▌     ▐░░▌    
 ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀      ▐░▌           ▄█░█▄▄▄▄▄▄▄█░█▄    ▐░░▌    
 ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌       ▐░▌          ▐░░░░░░░░░░░░░░░▌   ▐░░▌    
 ▐░▌          ▐░▌       ▐░▌▐░▌      ▐░▌      ▐░▌           ▀█░█▀▀▀▀▀▀▀█░█▀▄▄▄▄█░░█▄▄▄ 
 ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌            ▐░▌       ▐░▌▐░░░░░░░░░░░▌
  ▀            ▀         ▀  ▀         ▀       ▀              ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀ 
                                                                                      
 
*/
//__|||__\\//__|||__\\//__|||__\\//__|||__\\//__|||__\\
let fileSystem = require("fs")

let rawData = fileSystem.readFileSync("./userdata001.txt", "utf-8")

// console.log(rawData.length);

let parsedData = rawData.split('\n')
let newData = []
//console.log(parsedData.length);

for (let i = 0; i < parsedData.length; i++) {

    if (parsedData[i][0] == "[" && !isNaN(parseInt(parsedData[i][2]))) {
        //keep and convert element  
        let subarray = parsedData[i]
            .replace(']', '')
            .replace('[', '')
            .replace('$','')
            .trim()
            .split(',')

        //console.log(subarray);
        newData.push(subarray);
        //    } else { parsedData.splice(i,1)
        //     i--
        //remove elemnent
    }

    //console.log( parsedData[i][0])

}
//console.log(newData);
//__|||__\\//__|||__\\//__|||__\\//__|||__\\//__|||__\\

/*
 
  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄         ▄         ▄    ▄▄▄▄▄▄▄▄▄▄▄ 
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌       ▐░▌       ▐░▌  ▐░░░░░░░░░░░▌
 ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀       ▄█░█▄▄▄▄▄▄▄█░█▄  ▀▀▀▀▀▀▀▀▀█░▌
 ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌          ▐░░░░░░░░░░░░░░░▌          ▐░▌
 ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌           ▀█░█▀▀▀▀▀▀▀█░█▀           ▐░▌
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌            ▐░▌       ▐░▌   ▄▄▄▄▄▄▄▄▄█░▌
 ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀      ▐░▌           ▄█░█▄▄▄▄▄▄▄█░█▄ ▐░░░░░░░░░░░▌
 ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌       ▐░▌          ▐░░░░░░░░░░░░░░░▌▐░█▀▀▀▀▀▀▀▀▀ 
 ▐░▌          ▐░▌       ▐░▌▐░▌      ▐░▌      ▐░▌           ▀█░█▀▀▀▀▀▀▀█░█▀ ▐░█▄▄▄▄▄▄▄▄▄ 
 ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌            ▐░▌       ▐░▌  ▐░░░░░░░░░░░▌
  ▀            ▀         ▀  ▀         ▀       ▀              ▀         ▀    ▀▀▀▀▀▀▀▀▀▀▀ 
                                                                                        
 
*/
//--|||--//\\--|||--//\\--|||--//\\--|||--//\\--|||--//
/*
[0]id,
[1]first_name,
[2]last_name,
[3]email,
[4]gender,
[5]currency,
[6]Stock Market Cap 
*/

//stores elements without n/a
let noNa = [];
 
//gets rid of an n/a elements
for (let i = 0; i < newData.length; i++) {
     if (newData[i][6] !=  'n/a') {
         noNa.push(newData[i])  
    }
};

//findng the last index of the string

//console.log(noNa[0][6]);
//console.log(noNa[0][6][noNa[0][6].length - 1] === 'B');
;
let sum = 0

for (let i = 0; i < noNa.length; i++) {
 
    let letter = noNa[i][6][noNa[i][6].length - 1]
 
    let num1 = noNa[i][6]
 
       if (letter === 'B' && noNa[i][5] == 'Dollar') {
        
        let num2 = num1.slice(0,-1)

        let num3 = parseFloat(num2 * (10**9))

        sum += num3
         
        //console.log(`${noNa[i][1]} ${noNa[i][2]} is ${noNa[i][4]} and has \$${num3.toLocaleString()} ${noNa[i][5]} in stocks`); 
      
     }else if (noNa[i][5] == 'Dollar') {

        let num2 = num1.slice(0,-1)

        let num3 = parseFloat(num2 * (10**6))

        sum += num3

        //console.log(`${noNa[i][1]} ${noNa[i][2]} is ${noNa[i][4]} and has \$${num3.toLocaleString()} ${noNa[i][5]} in stocks`);

     }
    
  
}

//console.log(`The total market cap of the dollar is \$${sum.toLocaleString()}`);



/*
 
    ▄         ▄    ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄    ▄         ▄   
   ▐░▌       ▐░▌  ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌  ▐░▌       ▐░▌  
  ▄█░█▄▄▄▄▄▄▄█░█▄ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▄█░█▄▄▄▄▄▄▄█░█▄ 
 ▐░░░░░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌       ▐░▌▐░▌          ▐░░░░░░░░░░░░░░░▌
  ▀█░█▀▀▀▀▀▀▀█░█▀ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄  ▀█░█▀▀▀▀▀▀▀█░█▀ 
   ▐░▌       ▐░▌  ▐░░░░░░░░░░▌ ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌  ▐░▌       ▐░▌  
  ▄█░█▄▄▄▄▄▄▄█░█▄ ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌ ▄█░█▄▄▄▄▄▄▄█░█▄ 
 ▐░░░░░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌       ▐░▌          ▐░▌▐░░░░░░░░░░░░░░░▌
  ▀█░█▀▀▀▀▀▀▀█░█▀ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌ ▀█░█▀▀▀▀▀▀▀█░█▀ 
   ▐░▌       ▐░▌  ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ▐░▌       ▐░▌  
    ▀         ▀    ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀    ▀         ▀   
                                                                                                    
 
*/

function millOrBill(array) {
    
    let letter = array[array.length - 1]

    if (array != 'n/a') {
       
        if (letter == 'B') {
           
            let num = parseFloat(array.slice(0,-1) * (10**9))
           
            return num

        } else {
          
            let num = parseFloat(array.slice(0,-1) * (10**6))
            
            return num
        }
        
    }

}

// console.log(millOrBill(noNa[0][6]) );

let currency = []

for (let i = 0; i < noNa.length; i++) {
     
  if (currency.indexOf(noNa[i][5]) == -1) {
    
        currency.push(noNa[i][5])
      
        currency.sort()
  
    }
}

// console.log(currency);

for (let i = 0; i < currency.length; i++) {
 let num = 0
    
    for (let j = 0; j < noNa.length; j++) {
  
        if (noNa[j][5] == currency[i]) {

        num += millOrBill(noNa[j][6])
        
    }
     
 }
 console.log(`-----------------------------\nThe total marketcap for the ${currency[i]} is ${num}\n----------------------------- `);
}
