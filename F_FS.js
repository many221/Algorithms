// Felicias Fruit Stand

// 1. Array that stores three types of fruit; apples, oranges and grapes/
// 2. Each fruit type should have three different types/
// 3. Every fruit should have a unique price (please use normal prices)/
// 4. There should be an array called salesQuantity that stores the total number of sales for each fruit/
// 5. finally you should output a sales total summary for each fruit type.
var fruitNames =[
    'Apples',
    'Oranges',
    'Grapes'
];
var fruitTypes = [
    ['Fuji', 'Pink Pearl','Black Diamond'],
    ['Murcott', 'Tangelo', 'Kumquats'],
    ['Cotton Candy','Scuppernong','Catawb']
];

var prices = [
    [1.99, 3.99, 10.99],
    [2.00, 3.00, 2.50],
    [5.99, 6.99, 4.99]
];

var quantitySold = [
    [40, 20, 10],
    [30, 30, 20],
    [15, 20, 10]
];

 
 
    function fruit(val){
    
    switch(val){
        case fruitNames[0]:  num = 0; 
        break;
        case fruitNames[1]: num = 1;
        break;
        case fruitNames[2]: num = 2;
        break;
        default:
            return `Please Enter one of these fruits: ${fruitNames.toString()}`
        break;
    }; 

    function adder(arr){
        var sum = 0
        for( var j = 0; j < arr.length; j++){
            sum += arr[num][j]
        };
        return sum
    };
    

        //`${fruitNames[num]} has sold a total of \$${Math.floor(adder(prices)*adder(quantitySold))} and total of ${adder(quantitySold)}lbs`
    function loop(){
        for(i = 0; i < fruitTypes.length; i++){
            `${fruitTypes[num][i]} cost \$${prices[num][i]}/lbs and has sold ${quantitySold[num][i]}lbs `
    };
    };
    return loop()  
    };

    for( let k = 0 ; k < fruitNames.length;k++ ){
        console.log(fruit(fruitNames[k]))
    }



// function adder(arr){
// var sum = 0
// for( var i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// return sum
// }




    
// function test(num){
//     if(num ===0){
//         return console.log(fruitTypes[num][num]); 
//      } else if (num === 1){
//         return console.log(fruitTypes[num][num]);
//     }else if(num === 2){
//        return console.log(fruitTypes[num][num]);
//     } 
//     else return `Please enter a number 1 - 3`
    
// }

// console.log(test(1))
// function adder(arr){
// var sum = 0
// for( var i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// return sum
// }

// console.log(adder(quantitySold[0]))
