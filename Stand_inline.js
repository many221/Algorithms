        // Stand In Line

function nextInLine(arr,item){
arr.push(item)
//pushes the item onto the end array
return arr.shift(item)
// returns ie will show this value at the end of the function which is shifting the first item off the array 
}

var testArr = [1,2,3,4,5];

let test = [2,4,6,8,10,12,14,16];

console.log("Before "+ JSON.stringify(testArr));

console.log(nextInLine(testArr,6));

console.log("After " + JSON.stringify(testArr));

console.log("Before "+ JSON.stringify(test));

console.log(nextInLine(test,18));

console.log("After "+JSON.stringify(test));
