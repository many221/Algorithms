// //Fruit Stand 2.0
// After completion of Felicia's Fruit Stand complete the following tasks...
// Create a new file and only copy the array data from the previous assignment
// Output the total number of fruits sold
// Output the total profit of all fruits.
// Output all the fruit types for a each fruit name.
// example output:

// Apples:
// Granny Smith
// Red Delicious
// Honeycrisp

// Modify
// salesQuantity array to contain a number sold for each fruit by type.
// create an array called fruitStock that contains how much total stock there is of each fruit type. Should be a two dimensional array. It needs to be higher that the number sold

// Output how many fruits are left in stock for each fruit type.
// Output the total missed profit for each fruit
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
var fruitStock = [
    [76,38,29],
    [45,45,52],
    [21,37,19]
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
    
    var profit = Math.floor(adder(prices)*adder(quantitySold));
    var total =  Math.floor(adder(prices)*adder(fruitStock));
    console.log(`---------${fruitNames[num]}--------------
Has sold a total of \$${profit}
Has sold total of ${adder(quantitySold)}lbs
Has lost profit \$${total - profit} `)

     for(i = 0; i < fruitTypes.length; i++){
        
        let rem = fruitStock[num][i] - quantitySold[num][i]
        
        if(rem <= 0){
            rem = 'Finished'
       
        };
        console.log(`
        ${fruitTypes[num][i]}
        1) cost \$${prices[num][i]}/lbs
        2) sold ${quantitySold[num][i]}lbs 
        3) remaining ${rem}`)
    }
    ;
    };
    

    for( let k = 0 ; k < fruitNames.length;k++ ){
        fruit(fruitNames[k])}