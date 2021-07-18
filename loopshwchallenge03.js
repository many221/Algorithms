//part 1
const ary = [9, 5, 7, 13, 19, 23, 4, 12, 15]
let  sum = 1
    for(var i = 0; i < 7 ; i++){   
        sum *= ary[i]
    }

console.log(sum)

//part 2
const ary2 = [9, 5, 7, 13, 0, 19, 23, 4, 12, 15]

function factorOf(ar){
let yum = 1
    for(var i = 0 ; i < ar.length ; i++){
        if(ar[i]=== 0){
            ar[i] = 1
        } yum *= ar[i]

        console.log(`Intial Number: ${ar[i]}
        Factorial of Intial number: ${yum}
        Remainder of Factorial: ${yum%10 }`)
    }
   
}
console.log(factorOf(ary2))


