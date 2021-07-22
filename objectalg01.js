/*                                                                                                                                                                                     
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______|______|______|______|

   _____                        _    _____      _ _           _   _             
  |  __ \                      | |  / ____|    | | |         | | (_)            
  | |__) |___  ___ ___  _ __ __| | | |     ___ | | | ___  ___| |_ _  ___  _ __  
  |  _  // _ \/ __/ _ \| '__/ _` | | |    / _ \| | |/ _ \/ __| __| |/ _ \| '_ \ 
  | | \ \  __/ (_| (_) | | | (_| | | |___| (_) | | |  __/ (__| |_| | (_) | | | |
  |_|  \_\___|\___\___/|_|  \__,_|  \_____\___/|_|_|\___|\___|\__|_|\___/|_| |_|
                                                                                                  
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______|______|______|______|
  
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. 
Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), 
and a value. Complete the function using the rules below to modify the object passed to the function.

  Your function must always return the entire record collection object.

If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.

*/

// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
   

    
    if (prop != 'tracks' && value != '') {
        
        records[id][prop] = value

    } 
    
    else if( prop == 'tracks' && records[id].hasOwnProperty("tracks") != true){
       
        records[id][prop] = [value]
    }

    else if (prop == 'tracks' && value != '') {
        
        records[id][prop].push(value)

    }
    else if (value == '') {

        delete records[id][prop]
        
    }


 
  }
  //everything is passing doing what it should but its not passing on freecoode camp
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
//   updateRecords(recordCollection, 2548, "artist", "")
//   updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
//   updateRecords(recordCollection, 2468, "tracks", "Free")
//   updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
//     console.log(recordCollection);  
    


/*                                                                                                                                                                                     
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______|______|______|______|
                                                                                                                                                                                                                                                                                                                                                                                                                  
*/



/*                                                                                                                                                                                     
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______|______|______|______|
                                                                                                                                                                                                                                                                                                                                                                                                                  
  __          ___                    __                            _     _   _                 
  \ \        / / |                  / _|                          | |   | | | |                
   \ \  /\  / /| |__   ___ _ __ ___| |_ ___  _ __ ___    __ _ _ __| |_  | |_| |__   ___  _   _ 
    \ \/  \/ / | '_ \ / _ \ '__/ _ \  _/ _ \| '__/ _ \  / _` | '__| __| | __| '_ \ / _ \| | | |
     \  /\  /  | | | |  __/ | |  __/ || (_) | | |  __/ | (_| | |  | |_  | |_| | | | (_) | |_| |
      \/  \/   |_| |_|\___|_|  \___|_| \___/|_|  \___|  \__,_|_|   \__|  \__|_| |_|\___/ \__,_|
     
   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______|______|______|______|
  
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line

     let skeys = Object.entries(source)// turns source into an array of keys that can be looped through
     
    
    for (let i = 0; i < collection.length; i++) {
        
        objC = collection[i]// simplifies collection array into objects
        
        objCA = Object.entries(objC)

            for (let j = 0; j < skeys.length; j++) {// loops through the keys of source
            
                if (objCA[j][1] == skeys[j][1]) {
                    
                    arr.push(objCA[j])
                }
            

            }

    }
  if (arr.length != skeys.length) {

    return 'nope'

    }

    else {return arr}
    // Only change code above this line
    //arr.length,source.length;
  }
   console.log(  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
 );

//console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));



function whatIsInAName2(collection, source) {
    
    let collectArr = []//turns objects into array 

    let check = Object.entries(source)// turns ovject to array

    let checked = []

    for (let i = 0; i < collection.length; i++) {
        
     collectArr.push(Object.entries(collection[i]))

    }

    for (let i = 0; i < collectArr.length; i++) {
    
        for (let j = 0; j < check.length; j++) {
        
            if (collectArr[i][1][0] == check[j][0] && collectArr[i][1][1] == check[j][1]) {
                
                checked.push(collectArr[i])
            }
        }
    }
//collectArr[0][1][0] = key, collectArr[0][1][1] = value
//check[0][0] = key, check[0][1] = value 
    return checked
}

console.log(whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
//whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName2([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
/*                                                                                                                                        

   ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ ______ 
  |______|______|______|______|______|______|______|______|______|______|______|______|______|______|
                                                                                                                                                                                                                                                                                                                                                                                                                  
*/