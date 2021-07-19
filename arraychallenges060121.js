let arr1 = [80, 5, 100, 35, 25345, 234, 5123, 345, 432, 21]
// Challenge #1
// return the first value of an array

function firstValue(arr){
  return  arr[0]
};
console.log(firstValue(arr1));

//Challenge #2
// return the last value of an array

function lastValue(arr){
    return arr[arr.length - 1]
};
console.log(lastValue(arr1));

//Challenge #3
//reverse the array

function reversy(arr){
  var ar1 = []
  for(i = 0; i <= arr.length - 1; i++){
    ar1.unshift(arr[i]);

};
return ar1
};
console.log(reversy(arr1))

//Challenge #4
//
function largestOfFour(arr) {
  let big = 0
  let biggest = 0

  for(var i = 0; i < arr.length; i++ ){
    let big = arr[i][0]
   for( var j = 0; j < arr.length; j++ ){
     if(big < arr[i][j]){
      biggest = arr[i][j]
     }

   }

  }
  return biggest
  ;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);