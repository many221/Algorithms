/*
   _    _                 _                          _____                                _            
  | |  | |               | |                        |  __ \                              | |           
  | |  | |_ ____   _____ | |_ ___  ___  __   _____  | |  | | _____      ___ ____   _____ | |_ ___  ___ 
  | |  | | '_ \ \ / / _ \| __/ _ \/ __| \ \ / / __| | |  | |/ _ \ \ /\ / / '_ \ \ / / _ \| __/ _ \/ __|
  | |__| | |_) \ V / (_) | ||  __/\__ \  \ V /\__ \ | |__| | (_) \ V  V /| | | \ V / (_) | ||  __/\__ \
   \____/| .__/ \_/ \___/ \__\___||___/   \_/ |___/ |_____/ \___/ \_/\_/ |_| |_|\_/ \___/ \__\___||___/
         | |                                                                                           
   ______|_|____ ______ ______ ______ ______ ______ ______ ______ ______ ______                        
  |______|______|______|______|______|______|______|______|______|______|______|                       
                                                                                                      
*/

function getVoteCount(votes) {
    
    let vote = votes.upvotes - votes.downvotes

    return vote
}

//console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));

/*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/

/*
 
   _____  ___        ____   ___       ___   ___     _____ _             _                   
  | ____|/ _ \      |___ \ / _ \     |__ \ / _ \   / ____| |           | |                  
  | |__ | | | |______ __) | | | |______ ) | | | | | (___ | |_ _ __ __ _| |_ ___  __ _ _   _ 
  |___ \| | | |______|__ <| | | |______/ /| | | |  \___ \| __| '__/ _` | __/ _ \/ _` | | | |
   ___) | |_| |      ___) | |_| |     / /_| |_| |  ____) | |_| | | (_| | ||  __/ (_| | |_| |
  |____/ \___/      |____/ \___/     |____|\___/  |_____/ \__|_|  \__,_|\__\___|\__, |\__, |
                                                                                 __/ | __/ |
                                                                                |___/ |___/ 
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/


function fiftyThirtyTwenty(ati) {
    
    let budget ={
        'Needs' : ati * 0.5,
        'Wants' : ati * 0.3,
        'Savings' : ati *0.2
    }

    return budget
}

//console.log(fiftyThirtyTwenty(1500));

/*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/


/*
   _____            __ _ _        _                 _                
  |  __ \          / _(_) |      | |               | |               
  | |__) | __ ___ | |_ _| | ___  | |     ___   ___ | | ___   _ _ __  
  |  ___/ '__/ _ \|  _| | |/ _ \ | |    / _ \ / _ \| |/ / | | | '_ \ 
  | |   | | | (_) | | | | |  __/ | |___| (_) | (_) |   <| |_| | |_) |
  |_|   |_|  \___/|_| |_|_|\___| |______\___/ \___/|_|\_\\__,_| .__/ 
                                                              | |    
                                                              |_|                                                                               
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 
 
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

*/
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  
  let value = 0
  
  for (let i = 0; i < contacts.length; i++) {
        
        if (contacts[i].firstName == name ){
            
            if (prop in contacts[i]) {

            value = contacts[i][prop];

          } else {
            
            value = "No such property.";

          }
        } else {value = "No such contact."}
      return value
    }
}
//console.log(lookUpProfile("Akira", "likes"));
//console.log(lookUpProfile("Sherlock", "likes"));

//console.log(contacts[0].hasOwnProperty("firstName"));
//not sure why its not working 

/*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/

/*
 
    _____      _      _____                          __   _____                 _      _       ____            _            _   
   / ____|    | |    / ____|                        / _| |  __ \               | |    ( )     |  _ \          | |          | |  
  | |  __  ___| |_  | (___  _   _ _ __ ___     ___ | |_  | |__) |__  ___  _ __ | | ___|/ ___  | |_) |_   _  __| | __ _  ___| |_ 
  | | |_ |/ _ \ __|  \___ \| | | | '_ ` _ \   / _ \|  _| |  ___/ _ \/ _ \| '_ \| |/ _ \ / __| |  _ <| | | |/ _` |/ _` |/ _ \ __|
  | |__| |  __/ |_   ____) | |_| | | | | | | | (_) | |   | |  |  __/ (_) | |_) | |  __/ \__ \ | |_) | |_| | (_| | (_| |  __/ |_ 
   \_____|\___|\__| |_____/ \__,_|_| |_| |_|  \___/|_|   |_|   \___|\___/| .__/|_|\___| |___/ |____/ \__,_|\__,_|\__, |\___|\__|
                                                                         | |                                      __/ |         
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ |_|___                                  |___/          
  |______|______|______|______|______|______|______|______|______|______|______|                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
*/

function getBudgets(arr) {
    
    let sum = 0

    for (let i = 0; i < arr.length; i++) {

       if (arr[i].budget != undefined) {
           
        sum += arr[i].budget

       } 
        
    }

    return sum
}


//   console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]));

  /*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/

/*
     __  __       _                   _____ _          _                 _ _   _        ____   ____  _____  
    |  \/  |     | |                 / ____(_)        | |               (_) | | |      / __ \ / __ \|  __ \ 
    | \  / | __ _| | _____    __ _  | |     _ _ __ ___| | ___  __      ___| |_| |__   | |  | | |  | | |__) |
    | |\/| |/ _` | |/ / _ \  / _` | | |    | | '__/ __| |/ _ \ \ \ /\ / / | __| '_ \  | |  | | |  | |  ___/ 
    | |  | | (_| |   <  __/ | (_| | | |____| | | | (__| |  __/  \ V  V /| | |_| | | | | |__| | |__| | |     
    |_|  |_|\__,_|_|\_\___|  \__,_|  \_____|_|_|  \___|_|\___|   \_/\_/ |_|\__|_| |_|  \____/ \____/|_|     
     ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______                           
    |______|______|______|______|______|______|______|______|______|______|______|                          
                                                                                                          
*/
function Circle(radius){

    this.getCircumfernce = function(){
      
      return  2 * Math.PI * radius
    };
    this.getArea = function(){
      
       return Math.PI *(radius ** 2)
    }
    this.r = radius
}

let roundShape = new Circle(11);

console.log(roundShape.getArea());

 /*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/


/*
    _____                          _   _                ____  _     _           _         _                                            
   / ____|                        | | (_)              / __ \| |   (_)         | |       | |            /\                             
  | |     ___  _ ____   _____ _ __| |_ _ _ __   __ _  | |  | | |__  _  ___  ___| |_ ___  | |_ ___      /  \   _ __ _ __ __ _ _   _ ___ 
  | |    / _ \| '_ \ \ / / _ \ '__| __| | '_ \ / _` | | |  | | '_ \| |/ _ \/ __| __/ __| | __/ _ \    / /\ \ | '__| '__/ _` | | | / __|
  | |___| (_) | | | \ V /  __/ |  | |_| | | | | (_| | | |__| | |_) | |  __/ (__| |_\__ \ | || (_) |  / ____ \| |  | | | (_| | |_| \__ \
   \_____\___/|_| |_|\_/ \___|_|   \__|_|_| |_|\__, |  \____/|_.__/| |\___|\___|\__|___/  \__\___/  /_/    \_\_|  |_|  \__,_|\__, |___/
                                                __/ |             _/ |                                                        __/ |    
   ______ ______ ______ ______ ______ ______ __|___/______ ______|__/___ ______ ______                                       |___/     
  |______|______|______|______|______|______|______|______|______|______|______|______|                                                
                                                                                                                                       
                                                                                                                               
*/

function toArray(obj){

    return Object.entries(obj)
}

//console.log(toArray({ a: 1, b: 2 }));

 /*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/

/*
  __          ___                    __                               _     _______ _                 
  \ \        / / |                  / _|                   /\        | |   |__   __| |                
   \ \  /\  / /| |__   ___ _ __ ___| |_ ___  _ __ ___     /  \   _ __| |_     | |  | |__   ___  _   _ 
    \ \/  \/ / | '_ \ / _ \ '__/ _ \  _/ _ \| '__/ _ \   / /\ \ | '__| __|    | |  | '_ \ / _ \| | | |
     \  /\  /  | | | |  __/ | |  __/ || (_) | | |  __/  / ____ \| |  | |_     | |  | | | | (_) | |_| |
      \/  \/   |_| |_|\___|_|  \___|_| \___/|_|  \___| /_/    \_\_|   \__|    |_|  |_| |_|\___/ \__,_|
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|
                                                                     

*/

function whatIsInAName(collection, source) {
   
  var arr = [];
  
  collection.forEach( testObj => {

      let passedTest = true
     
    for (const key in source) {
    
      if (source[key] != testObj[key]) {

          passedTest = false
      }
      
    }

    if (passedTest == true) {
      
      arr.push(testObj)
      
    }

  })

  return arr;

}
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

 /*                                                                            
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______| 

*/
