        ///-------Challenge #1 ------///
        var ourQuizGrades = [
            [ 'Bob', 72 ],  	[ 'Jill', 89 ],
            [ 'Billy', 95 ],	[ 'Grace', 90 ],
            [ 'Jen', 77 ],  	[ 'Tom', 80 ],  
            [ 'Jack', 49 ], 	[ 'Alex', 56 ],
            [ 'Michelle', 71 ], [ 'Bill', 12 ],
            [ 'Neil', 72 ], 	[ 'Sam', 88 ],  
            [ 'Henry', 43 ], [ 'Dave', 69 ]  
          ]
    function passed(array) {
        var pass = []
        var fail = []
        for (let index = 0; index < array.length; index++) {
            if (array[index][1] >= 70) {
                pass.push(array[index][1])
            } else {fail.push(array[index][1])}   
        };
        var p = pass.length
        var f = fail.length

        console.log(`${p} students passed the quiz, and ${f} students failed...`);
    }      
    passed(ourQuizGrades)
console.log("------------------------------------");
            ///-------Challenge #2 ------///


    function failed(array) {
        var result = ''
        for (let index = 0; index < array.length; index++) {
            if (array[index][1] >= 70) {
                result = 'passed'
            } else {result = 'failed'}
        
            console.log(`${array[index][0]} has ${result} with a ${array[index][1]}`);
        }
    }
    failed(ourQuizGrades)
console.log("------------------------------------");
                ///-------Challenge #3 ------///
    function sorting(array){
        ourQuizGrades.sort(function(a,b) {
            return a[1]-b[1]
        })
        var result = ''
        for (let index = 0; index < array.length; index++) {
            if (array[index][1] >= 70) {
                result = 'passed'
            } else {result = 'failed'}
        
            console.log(`${array[index][0]} has ${result} with a ${array[index][1]}`);
        }
 
    }
    sorting(ourQuizGrades)
 console.log("------------------------------------");