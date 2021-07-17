var fruitTypes = [
    ['Fuji', 'Pink Pearl','Black Diamond'],
    ['Murcott', 'Tangelo', 'Kumquats'],
    ['Cotton Candy','Scuppernong','Catawb']
];
function test(num){
    if(num ===0){
        return fruitTypes[num][num]; 
     } else if (num === 1){
        return  fruitTypes[num][num];
    }else if(num === 2){
       return fruitTypes[num][num];
    } 
    else return `Please enter a number 1 - 3`
    
}
// var n = fruitTypes[1].toString()
console.log(test(2) )
