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


    }

    )


    return arr;

  }
  
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//   whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

  
 // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })

//   whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})


//   let obj = {
//       t:1,
//       ty:2,
//       a:3,
//       y:4
//   }

//   console.log(1, Object.keys( obj ) );
//   console.log(2, Object.values( obj ));
//   console.log(3, Object.entries( obj ));

const  members = ['j','m','t','e','s','r','b']

function rad(arr) {
    
    let teams = [[],[]]
    let members = {}
    let team1 = teams[0], teams2 = teams[1]

    arr.forEach((arr,i)  => members[arr] = (Math.random() * arr.length))

    let members2 = [members]

    members2.sort(function (a,b) {
        return a.value - b.value
    })

    return members2
}
console.log(rad(members));