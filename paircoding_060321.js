    // // Pair Coding: Richies Luong & Manny Lee

    //         //Challenge #1 
    // //Part 1 Richies
    // var lowMileage = [80000, 70000, 60000]
    // var highMileage = [105000, 150000, 120000]
    // function totalMiles(car) {  if (car < 100000) {   
    //      console.log("Your car has been driven less than 100,000 miles, you are available for the better insurance package")  } 
    //      else if (car > 100000) {   
    //           console.log("Your car has been driven more than or equal to 100,000 miles, you are not available for the better insurance package")  }  
    //      else console.log("Please enter odometer mileage")}
    //      totalMiles(highMileage[0])
    // //Part 2 Manny
    // var roomCost = [600,100,2000,500,800,300]

    // function hotelSuite(room){
    //     if(room > 500){
    //         console.log('You have selected a luxury hotel suite')
    //     }
    //     else if(room <= 500){
    //         console.log('You have selected a standard hotel suite')
    //     }
    //     else console.log('Please input a hotel room cost')
    // }
    // hotelSuite(roomCost[3])



    //         ///////////////////// Challenge #2 //////////////////

    // // Part A Richies
   
    // let carNames = ['Honda Accord', 'Toyota Corolla', 'Tesla Model Y', 'Chevy Camaro']
    // for (var i = 0; i < carNames.length; i++) {	console.log(carNames[i])}

    // // Part B  Manny 
    
    // let hotelName = 'CareerDevs Resorts'
    // for (var i = 0; i < hotelName.length; i++){
    //     console.log(hotelName[i])
    // }
    
        
    
            ///////////////////// Challenge #3 //////////////////

    // Part A Richies 
//     let carGas = [0.15, 0.75, 0.27, 0.23, 0.80, 0.50, 0.10, 0.30]
//     function gasPercentage(car) { 
//          function percentage(num) 
//          {    var per = num * 100 + '%'   
//           return per  }  
//          if (car <= 0.25) {   
//          console.log(`The car's gas tank is at ${percentage(car)}, the car needs a fill up soon.`)  }
              
//          else if (car > 0.25) 
//          {console.log(`The car’s gas tank is at ${percentage(car)}, the car does not need a fill up very soon.`)  }
               
//          else console.log("Please enter gas percentage")}

//     gasPercentage(carGas[1])
    
//     // Part B Manny
//     let hotelPrices = [550, 300, 100, 700, 250, 450, 600, 200]

//     function hotelRooms(room){
        
//         if(room >= 500){
//             console.log(`The hotel room with the price of ${room} is a luxury room`)
//         } else if (room < 500){
//             console.log(`The hotel room with the price of ${room} is not a luxury room.`)
//         } else {
//             `Please enter a room price`
//         }
//     }

// hotelRooms(hotelPrices[4])



                ///////////////////// Challenge #4 //////////////////
let number = [];

function pusher(){
    for(var i = 14; i <= 100; i++){
        number.push(i)
    }
    console.log(number)
}

pusher()

let numberX3 = []

function times3(){
for(var i =  0; i < number.length; i++){
    numberX3.push(number[i] * 3);
    if (numberX3[i] % 2 == 0){
       console.log(`${numberX3[i]} is even`)
    }  else console.log(`${numberX3[i]} is odd`)
}
console.log(numberX3)
}
 times3()