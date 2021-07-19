   ///-------Challenge #1 ------///
console.log(`-------------------------`);
console.log(`-------Challenge #1 ------`);
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

let riders = [["Arnell"], ["Carlos", "Keith", "Sergio"],["Junior", "Loubna", "Margie"], ["Travis", "Matt", "Gabriel"], ["Elvis", "Jackie", "Saimer"]]
console.log(`${riders[3][2]}\n${riders[0][0]}\n${riders[2][2]} `);

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
console.log(`-------------------------`);
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/  

    ///-------Challenge #2 ------///
console.log(`-------------------------`);
console.log(`-------Challenge #2 ------`);
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

console.log(riders[0][0]);
for (let i = 1; i < riders.length ; i++) {
{for (let j = 0; j < riders[1].length; j++) {
  
    console.log(riders[i][j])
 }
 }
}
//console.log(riders[].length);

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
console.log(`-------------------------`);
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

    
    ///-------Bonus ------///
console.log(`-------------------------`);
console.log(`-------Bonus ------`);
 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/

for (let i = 1; i < riders.length; i++) {
  for (let j = 0; j < riders[i].length; j++) {
      for (let k = 0; k < riders[i][j].length; k++) {
          if (riders[i][j].length < 6) {
              console.log(riders[i][j][k]);
          };
          
      }
      
  }  
}

 /*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/
console.log(`-------------------------`);
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/*/