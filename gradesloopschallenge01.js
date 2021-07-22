var ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69 ];

var ourQuizGradesNames = ['Bob', 'Jill', 'Billy', 'Grace', 'Jen', 'Tom', 'Jack', 'Alex', 'Michelle', 'Bill', 'Neil', 'Sam', 'Henry', 'Dave']


        //----------Challenge #1-------------//

function passAndFail (arr){
    var pass = [];
    var fail = [];
    for(var i = 0; i < ourQuizGrades.length; i++){
    
        if( arr[i] >= 70){
            pass.push(arr[i])
        } else fail.push(arr[i])
    };
    // console.log(pass);
    // console.log(fail);
    console.log(`${pass.length} Students passed the quiz, and ${fail.length} have failed`);
}

passAndFail(ourQuizGrades)


        //----------Challenge #2-------------//
var grades = []

    for (let i = 0; i < ourQuizGrades.length; i++) {
        let result = ourQuizGrades[i]
        if(result >= 70){
            result = 'passed'
        } else result = 'failed'

       grades.push(`${ourQuizGradesNames[i]} has ${result} with a ${ourQuizGrades[i]} `);
   console.log(grades[i]);
    }

//studentsGrades(ourQuizGrades)


        //----------Challenge #3-------------//

var grades2 = [];

for (let index = 0; index < ourQuizGrades.length; index++) {
 
    grades2.push([ourQuizGrades[index],ourQuizGradesNames[index]]); 

}    
    
 grades2.sort(function(a, b) {
    return a[0] - b[0];
  });
  
console.log(grades2);

for (let index = 0; index < grades2.length; index++) {
    
    let result = grades2[index][0]
    if(result >= 70){
        result = 'passed'
    } else result = 'failed'
    
    console.log(`${grades2[index][1]} has ${result} with a ${grades2[index][0]} `)

}


        //----------Challenge #4-------------//

        function letterGrades(num) {
            
        var letter = ''
            if (num <= 59) {return letter = 'F'}
            
            else if(num >= 60 && num <= 64){return letter = 'D-'}
            
            else if(num >= 65 && num <= 69){return letter = 'D+'}
           
            else if(num >= 70 && num <= 74){return letter = 'C-'}
            
            else if ( num >= 75 && num <= 79){ return letter = 'C+'}
                
            else if ( num >= 80 && num <= 84){ return letter = 'B-'}
                      
            else if ( num >= 85 && num <= 89){ return letter = 'B+'}  
                    
            else if ( num >= 90 && num <= 94){ return letter = 'A-'}  
                    
            else if ( num >= 95){ return letter = 'A+'}   
                   
        
        }
        console.log(letterGrades(76))

       for (let index = 0; index < ourQuizGrades.length; index++) {
          console.log(`${grades2[index][1]} got a ${letterGrades(grades2[index][0])} on their quiz`);
           
       }

