/*
 
  .oOOOo.         o                                               OOooOoO         o                         o                   
 .O     o        O        o                                       o              O                         O           o        
 o               o                                O               O              o                         o                O   
 o               O                               oOo              oOooO          O                         O               oOo  
 o         .oOo. o  .oOo  O  O   o  .oOo          o   .oOo.       O       .oOoO' OoOo. `OoOo. .oOo. 'OoOo. OoOo. .oOo. O    o   
 O         OooO' O  `Ooo. o  o   O  `Ooo.         O   O   o       o       O   o  o   o  o     OooO'  o   O o   o OooO' o    O   
 `o     .o O     o      O O  O   o      O         o   o   O       o       o   O  o   O  O     O      O   o o   O O     O    o   
  `OoooO'  `OoO' Oo `OoO' o' `OoO'o `OoO'         `oO `OoO'       O'      `OoO'o O   o  o     `OoO'  o   O O   o `OoO' o'   `oO 

  */
 
  console.log('#1____________________________________');

 function c2f(temp) {
    let fahrenheit = temp*(9/5)+35
    return fahrenheit
};

console.log(c2f(20));



/*
 
 `OooOOo.                                                           .oOOOo.                               
  o     `o                                                          o     o               o               
  O      O                                                          O.         O                          
  o     .O                                                           `OOoo.   oOo                         
  OOooOO'  .oOo. `o   O .oOo. `OoOo. .oOo  .oOo.       .oOoO'             `O   o   `OoOo. O  'OoOo. .oOoO 
  o    o   OooO'  O   o OooO'  o     `Ooo. OooO'       O   o               o   O    o     o   o   O o   O 
  O     O  O      o  O  O      O         O O           o   O        O.    .O   o    O     O   O   o O   o 
  O      o `OoO'  `o'   `OoO'  o     `OoO' `OoO'       `OoO'o        `oooO'    `oO  o     o'  o   O `OoOo 
                                                                                                        O 
                                                                                                     OoO' 
 
*/

console.log('____#2________________________________');

function reversy(word) {
   // let backwards = word.reverse()
    let backwards = []
    for (let i = 0; i < word.length; i++) {
         backwards.unshift(word[i]) 
        
    }
   return backwards.join('')
   
};

console.log(reversy('aibohphobia') );



/*

 OOooOoO                                            o                                  o.     O                  o                 
 o                                       o         O  o                                Oo     o                 O                  
 O                      O                          o                                   O O    O                 O                  
 oOooO                 oOo                         O                                   O  o   o                 o                  
 O       .oOoO' .oOo    o   .oOo. `OoOo. O  .oOoO' o  O  ooOO .oOo.       .oOoO'       O   o  O O   o  `oOOoOO. OoOo. .oOo. `OoOo. 
 o       O   o  O       O   O   o  o     o  O   o  O  o    o  OooO'       O   o        o    O O o   O   O  o  o O   o OooO'  o     
 o       o   O  o       o   o   O  O     O  o   O  o  O   O   O           o   O        o     Oo O   o   o  O  O o   O O      O     
 O'      `OoO'o `OoO'   `oO `OoO'  o     o' `OoO'o Oo o' OooO `OoO'       `OoO'o       O     `o `OoO'o  O  o  o `OoO' `OoO'  o     

 */

 console.log('_____#3_______________________________');

function factorinator(num) {
    
    let factor = 1
    
    for (let i = 1; i <= num; i++) {
        factor *=[i]; 
    }

    return factor
}
console.log(factorinator(5));



/*
 
 OOooOoO                o              o                 o                                                 o          `O                   o                                    .oOOOo.                               
 o       o             O              O                 O                                                  O           o                  O        o                            o     o               o               
 O                     o          O   o                 o                                        O         o           O                  o                                     O.         O                          
 oOooO                 o         oOo  O                 o                                       oOo        O           O                  o                                      `OOoo.   oOo                         
 O       O  'OoOo. .oOoO          o   OoOo. .oOo.       O       .oOo. 'OoOo. .oOoO .oOo. .oOo    o         o     o     o .oOo. `OoOo. .oOoO        O  'OoOo.       .oOoO'             `O   o   `OoOo. O  'OoOo. .oOoO 
 o       o   o   O o   O          O   o   o OooO'       O       O   o  o   O o   O OooO' `Ooo.   O         O     O     O O   o  o     o   O        o   o   O       O   o               o   O    o     o   o   O o   O 
 o       O   O   o O   o          o   o   O O           o     . o   O  O   o O   o O         O   o         `o   O o   O' o   O  O     O   o        O   O   o       o   O        O.    .O   o    O     O   O   o O   o 
 O'      o'  o   O `OoO'o         `oO O   o `OoO'       OOoOooO `OoO'  o   O `OoOo `OoO' `OoO'   `oO        `OoO' `OoO'  `OoO'  o     `OoO'o       o'  o   O       `OoO'o        `oooO'    `oO  o     o'  o   O `OoOo 
                                                                                 O                                                                                                                                  O 
                                                                              OoO'                                                                                                                               OoO' 
 
*/

console.log('________#4____________________________');

function findBigWord(str) {

   let arr =  str.split(' ')

    let big = ''

   for (let i = 0; i < arr.length; i++) {
      
    if (arr[i].length > big.length ) {
          big = arr[i] 

        }
   }
   
 console.log(`'${big}' is the longest word in the string with ${big.length} letters`); 
}

 findBigWord('Find the Longest Word in a String')
 findBigWord('This is a random sentence that is absolutely spectactular')


/*
 
       `OooOOo.                                          o                                                  o.     O                  o                                                Oo                                     
        o     `o                                        O                                                   Oo     o                 O                              o                 o  O                                    
        O      O         O                              o                                         O         O O    O                 O                                               O    o                                   
        o     .O        oOo                             o                                        oOo        O  o   o                 o                                              oOooOoOo                                  
        OOooOO'  .oOo.   o   O   o  `OoOo. 'OoOo.       O       .oOoO' `OoOo. .oOoO .oOo. .oOo    o         O   o  O O   o  `oOOoOO. OoOo. .oOo. `OoOo. .oOo        O  'OoOo.       o      O `OoOo. `OoOo. .oOoO' O   o .oOo  
        o    o   OooO'   O   o   O   o      o   O       O       O   o   o     o   O OooO' `Ooo.   O         o    O O o   O   O  o  o O   o OooO'  o     `Ooo.       o   o   O       O      o  o      o     O   o  o   O `Ooo. 
        O     O  O       o   O   o   O      O   o       o     . o   O   O     O   o O         O   o         o     Oo O   o   o  O  O o   O O      O         O       O   O   o       o      O  O      O     o   O  O   o     O 
        O      o `OoO'   `oO `OoO'o  o      o   O       OOoOooO `OoO'o  o     `OoOo `OoO' `OoO'   `oO       O     `o `OoO'o  O  o  o `OoO' `OoO'  o     `OoO'       o'  o   O       O.     O  o      o     `OoO'o `OoOO `OoO' 
                                                                                  O                                                                                                                                   o       
                                                                               OoO'                                                                                                                                OoO'       
 
*/

console.log('_______________#5_____________________');

function bigFour(mArr) {

    let b = []
    let big = 0
    let biggest = 0

    for (let i = 0; i < mArr.length; i++) {
       
        big = mArr[i][0]

        for (let j = 0; j < mArr[i].length; j++) {
           
            if (big  < mArr[i][j] ) {
                
                biggest = mArr[i][j]
            } 
        }
        b[i] = biggest
    }
     return b


}

console.log(bigFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );


/*
 
  .oOOOo.               .oOo                                 o                o.OOoOoo             o                 
 .O     o               O    o                              O                  O                  O  o               
 o                      o                               O   o                  o                  o                  
 o                      OoO                            oOo  O                  ooOO               o                  
 o         .oOo. 'OoOo. o    O  `OoOo. `oOOoOO.         o   OoOo. .oOo.        O       'OoOo. .oOoO  O  'OoOo. .oOoO 
 O         O   o  o   O O    o   o      O  o  o         O   o   o OooO'        o        o   O o   O  o   o   O o   O 
 `o     .o o   O  O   o o    O   O      o  O  O         o   o   O O            O        O   o O   o  O   O   o O   o 
  `OoooO'  `OoO'  o   O O'   o'  o      O  o  o         `oO O   o `OoO'       ooOooOoO  o   O `OoO'o o'  o   O `OoOo 
                                                                                                                   O 
                                                                                                                OoO' 
 
*/

console.log('_________________#6___________________');

function ending(str,end) {
   
     let arry = str.split(' ')
    //  arry.replace('\'','[')
   // let check = str.inlcudes(' ')
    //  if (check == true ) {
    //    arry = str.split(' ')
    //  }else arry = str.split('')
    
    let i = arry[arry.length-1][arry[arry.length - 1].length - 1]


     console.log(i === end);
}

ending('manny was at home', 'h');


/*
 
 `OooOOo.                                                    .oOOOo.                                     `OooOOo.                                                    .oOOOo.                               
  o     `o                                                   o     o               o                      o     `o                                                   o     o               o               
  O      O                            O                      O.         O                                 O      O                            O                      O.         O                          
  o     .O                           oOo                      `OOoo.   oOo                                o     .O                           oOo                      `OOoo.   oOo                         
  OOooOO'  .oOo. .oOo. .oOo. .oOoO'   o         .oOoO'             `O   o   `OoOo. O  'OoOo. .oOoO        OOooOO'  .oOo. .oOo. .oOo. .oOoO'   o         .oOoO'             `O   o   `OoOo. O  'OoOo. .oOoO 
  o    o   OooO' O   o OooO' O   o    O         O   o               o   O    o     o   o   O o   O        o    o   OooO' O   o OooO' O   o    O         O   o               o   O    o     o   o   O o   O 
  O     O  O     o   O O     o   O    o         o   O        O.    .O   o    O     O   O   o O   o        O     O  O     o   O O     o   O    o         o   O        O.    .O   o    O     O   O   o O   o 
  O      o `OoO' oOoO' `OoO' `OoO'o   `oO       `OoO'o        `oooO'    `oO  o     o'  o   O `OoOo        O      o `OoO' oOoO' `OoO' `OoO'o   `oO       `OoO'o        `oooO'    `oO  o     o'  o   O `OoOo 
                 O                                                                               O                       O                                                                               O 
                 o'                                                                           OoO'                       o'                                                                           OoO' 
 
*/
console.log('__________________#7__________________');

function repeater(str,num) {
   
   let add = ''

    for (let i = 0; i < num; i++) {
        add += str    
    }
    console.log(add);
}
repeater('abc',5)


/*
 
 oOoOOoOOo                                                                  .oOOOo.                               
     o                                                                      o     o               o               
     o                                         O                            O.         O                          
     O                                        oOo                            `OOoo.   oOo                         
     o     `OoOo. O   o  'OoOo. .oOo  .oOoO'   o   .oOo.       .oOoO'             `O   o   `OoOo. O  'OoOo. .oOoO 
     O      o     o   O   o   O O     O   o    O   OooO'       O   o               o   O    o     o   o   O o   O 
     O      O     O   o   O   o o     o   O    o   O           o   O        O.    .O   o    O     O   O   o O   o 
     o'     o     `OoO'o  o   O `OoO' `OoO'o   `oO `OoO'       `OoO'o        `oooO'    `oO  o     o'  o   O `OoOo 
                                                                                                                O 
                                                                                                             OoO' 
 
*/
console.log('____________________#8________________');


function cut(str,num) {

    let arry = str.split(' ')
    
    let cut = '...'

    if(arry.length > num ){

         arry.splice(arry.length - num)
         
         return arry

    }else return cut

    
    
}

console.log(cut('A-tisket a-tasket A green and yellow basket', 6));



/*
 
 OOooOoO                o                          `o    O                                       
 o       o             O                            o   O                                        
 O                     o                            O  O                                         
 oOooO                 o                            oOo                                          
 O       O  'OoOo. .oOoO  .oOo. `OoOo. .oOo         o  o    .oOo. .oOo. .oOo. .oOo. `OoOo. .oOo  
 o       o   o   O o   O  OooO'  o     `Ooo.        O   O   OooO' OooO' O   o OooO'  o     `Ooo. 
 o       O   O   o O   o  O      O         O        o    o  O     O     o   O O      O         O 
 O'      o'  o   O `OoO'o `OoO'  o     `OoO'        O     O `OoO' `OoO' oOoO' `OoO'  o     `OoO' 
                                                                        O                        
                                                                        o'                       
 
*/

console.log('______________________#9______________');

//finds the first element that matches the given targer

function finder(arry , func){
    
    let num = 0

    for (let i = 0; i < arry.length; i++) {
        
        if(func(arry[i]) === true){

             return num = arry[i]

                }
            
        }

}

console.log(finder([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(finder([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

/*
 
 .-. .-')                                    (`\ .-') /` ('-. .-.             
 \  ( OO )                                    `.( OO ),'( OO )  /             
  ;-----.\  .-'),-----.  .-'),-----.       ,--./  .--.  ,--. ,--. .-'),-----. 
  | .-.  | ( OO'  .-.  '( OO'  .-.  '      |      |  |  |  | |  |( OO'  .-.  '
  | '-' /_)/   |  | |  |/   |  | |  |      |  |   |  |, |   .|  |/   |  | |  |
  | .-. `. \_) |  |\|  |\_) |  |\|  |      |  |.'.|  |_)|       |\_) |  |\|  |
  | |  \  |  \ |  | |  |  \ |  | |  |      |         |  |  .-.  |  \ |  | |  |
  | '--'  /   `'  '-'  '   `'  '-'  '      |   ,'.   |  |  | |  |   `'  '-'  '
  `------'      `-----'      `-----'       '--'   '--'  `--' `--'     `-----' 
 
*/

console.log('_________________________#10___________');

function booWho(boo) {
    
     console.log(typeof(boo) === 'boolean')
       
}

   booWho(false) 
   booWho(true)
   booWho(1)
   booWho('ssss')


/*
 
 oOoOOoOOo           o              .oOOOo.                                        .oOOOo.                                              
     o     o        O              .O     o                                        o     o                                              
     o          O   o              o                                               O.                      O                            
     O         oOo  O              o                                                `OOoo.                oOo                           
     o     O    o   o  .oOo.       o         .oOoO' .oOo  .oOo.       .oOoO'             `O .oOo. 'OoOo.   o   .oOo. 'OoOo. .oOo  .oOo. 
     O     o    O   O  OooO'       O         O   o  `Ooo. OooO'       O   o               o OooO'  o   O   O   OooO'  o   O O     OooO' 
     O     O    o   o  O           `o     .o o   O      O O           o   O        O.    .O O      O   o   o   O      O   o o     O     
     o'    o'   `oO Oo `OoO'        `OoooO'  `OoO'o `OoO' `OoO'       `OoO'o        `oooO'  `OoO'  o   O   `oO `OoO'  o   O `OoO' `OoO' 
                                                                                                                                        
                                                                                                                                        
 
*/

console.log('_____________________________#11_______');

function bigLetters(str) {
 
    let string = str  

    let space = []

    let small = []

    let cap = []

    if( string.includes(' ') ){

       space = string.split(' ')

     }else{ space = string.split('')}

      for ( let i = 0; i < space.length; i++) {
            
        small.push( space[i].toLowerCase() );
        
       cap.push( small[i][0].toUpperCase() + small[i].substring(small[i].length - (small[i].length - 1 ))); 
        
      }
     
      console.log(cap.join(' '));
    
    }

bigLetters('I\'m a little tea pot')  
bigLetters('sHoRt AnD sToUt')
bigLetters('HERE IS MY HANDLE HERE IS MY SPOUT')


/*
 
                                                                                    
 .oPYo. 8  o                                   8   .oPYo.        8  o               
 8      8                                      8   8             8                  
 `Yooo. 8 o8 .oPYo. .oPYo.   .oPYo. odYo. .oPYo8   `Yooo. .oPYo. 8 o8 .oPYo. .oPYo. 
     `8 8  8 8    ' 8oooo8   .oooo8 8' `8 8    8       `8 8    8 8  8 8    ' 8oooo8 
      8 8  8 8    . 8.       8    8 8   8 8    8        8 8    8 8  8 8    . 8.     
 `YooP' 8  8 `YooP' `Yooo'   `YooP8 8   8 `YooP'   `YooP' 8YooP' 8  8 `YooP' `Yooo' 
 :.....:..:..:.....::.....::::.....:..::..:.....::::.....:8 ....:..:..:.....::.....:
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::8 ::::::::::::::::::::::::
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::..::::::::::::::::::::::::
 
*/

console.log('________________________________#12____');

function sliceAndSplice(arr1,arr2,num) {
    
    

    for (let i = 0; i < arr1.length; i++) {
        
        //   arr2.fill(arr1[i],num,arr1.length)
        arr2.splice(num, 0 , arr1[i])
    }

    console.log(arr2);
}
sliceAndSplice([1, 2, 3], [4, 5], 1)
sliceAndSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)


/*
 
 OOooOoO         o                   o.oOOOo.                                         
 o              O                     o     o                                         
 O              o                     O     O                                         
 oOooO          O                     oOooOO.                                         
 O       .oOoO' o  .oOo  O   o        o     `O .oOo. O   o  'OoOo. .oOo  .oOo. `OoOo. 
 o       O   o  O  `Ooo. o   O        O      o O   o o   O   o   O O     OooO'  o     
 o       o   O  o      O O   o        o     .O o   O O   o   O   o o     O      O     
 O'      `OoO'o Oo `OoO' `OoOO        `OooOO'  `OoO' `OoO'o  o   O `OoO' `OoO'  o     
                             o                                                        
                          OoO'                                                        
 
*/

console.log('__________________________________#13__');


// function bouncer1(arr) {
    
    

//     for (let i = 0; i < arr.length; i++) {
    
//         let v = arr[i]

//         switch (v) {
//             case false:
//             case null:
//             case undefined:
//             case NaN:
//             case 0:
//             case '':
//             case "":
//                 arr.splice(v,1)
//             break;
//             default:
//                 break;
//         }
//     }
    
//     console.log(arr);;
// }

// function bouncer(arr) {


//     let fil = arr.filter(false)

// }

// console.log(!!1);
function bouncer(arr) {
   
    let truth=[]

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i]){
        
            truth.push(arr[i])
    
        }
   }
  

    return truth
}





console.log(
   
bouncer([7, "ate", "", false, 9]),

bouncer([false, null, 0, NaN, undefined, ""]))


/*
 
 o          `O  o                                  o             ooOoOOo       o.oOOOo.         o                    
 O           o O                                  O                 O           o     o        O                     
 o           O o                                  o                 o           O     O        o                     
 O           O O                                  o                 O           oOooOO.        O                     
 o     o     o OoOo. .oOo. `OoOo. .oOo.       .oOoO  .oOo.          o           o     `O .oOo. o  .oOo. 'OoOo. .oOoO 
 O     O     O o   o OooO'  o     OooO'       o   O  O   o          O           O      o OooO' O  O   o  o   O o   O 
 `o   O o   O' o   O O      O     O           O   o  o   O          O           o     .O O     o  o   O  O   o O   o 
  `OoO' `OoO'  O   o `OoO'  o     `OoO'       `OoO'o `OoO'       ooOOoOo        `OooOO'  `OoO' Oo `OoO'  o   O `OoOo 
                                                                                                                   O 
                                                                                                                OoO' 
 
*/

console.log('____________________________________#14');


// let araAra = [30,45,12,32]

// console.log(araAra.indexOf(30));

function getI(arr,num) {
   
    arr.push(num)

    arr.sort(function(a, b) {

        return a - b})

    let coop = 0

    for (let i = 0; i < arr.length; i++) {

        if(num >= arr[i]){
                
             coop = arr.indexOf(arr[i//+1
            ])
        }
    
    }
  
    return coop
}

console.log(getI([5, 3, 20, 3], 5));

console.log(getI([10, 20, 30, 40, 50], 35));



/*
 
 Oo      oO                                                 
 O O    o o                           o                     
 o  o  O  O          O            O                         
 O   Oo   O         oOo          oOo                        
 O        o O   o    o   .oOoO'   o   O  .oOo. 'OoOo. .oOo  
 o        O o   O    O   O   o    O   o  O   o  o   O `Ooo. 
 o        O O   o    o   o   O    o   O  o   O  O   o     O 
 O        o `OoO'o   `oO `OoO'o   `oO o' `OoO'  o   O `OoO' 
                                                            
                                                            
 
*/

console.log('_________________________________#15___');

function mutant([mut,ant]) {


    let ut =mut.split('')

    let nt = ant.split('')

    let check = []

    for (let i = 0; i < nt.length; i++) {

        let a = nt[i]

        for (let j = 0; j < ut.length; j++) {
          
            let u = ut[j]
            
            if(a == u){

                check.push(u)

            }
        }
        
    }

    if (check.length >= nt.length) {
        
        return console.log(true);
        
    }else{
        
        return console.log(false);

    }
 
}

mutant(["zyxwuvutsrqponmlkjihgfedcba", "qrstu"])

/*
 
  .oOOOo.   o                  o                 Oo      oO              o                 
 .O     o  O                   O                 O O    o o              O                 
 o         o                   o                 o  o  O  O              o                 
 o         O                   o                 O   Oo   O              o                 
 o         OoOo. O   o  'OoOo. O  o  O   o       O        o .oOo. 'OoOo. O  o  .oOo. O   o 
 O         o   o o   O   o   O OoO   o   O       o        O O   o  o   O OoO   OooO' o   O 
 `o     .o o   O O   o   O   o o  O  O   o       o        O o   O  O   o o  O  O     O   o 
  `OoooO'  O   o `OoO'o  o   O O   o `OoOO       O        o `OoO'  o   O O   o `OoO' `OoOO 
                                         o                                               o 
                                      OoO'                                            OoO' 
 
*/


console.log('______________________________#16______');

function chunky(arr,num) {

    let rr = []

    // let cut = rr.push(arr.slice(0,num))

    for (let i = 0; i < arr.length; i += num){
        

            rr.push(arr.slice(i, i+num))
        }
    
    
    return rr

}
let tt = [1,2,3,4,5,6,7]


console.log(chunky(tt,3));

