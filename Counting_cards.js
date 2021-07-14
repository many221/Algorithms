 //Counting Cards
//

var count = 0;
  
// function cc(card){
//   if(card >= 2 && card <=6){
//     count++}
//   else if(card == 10 || typeof(''))
//   {count-- }
  
//   if(count > 0) return `${count} Bet`
//   return `${count} Hold`

  
// };
function cc(card) {
 
  const cards = [
    [2,3,4,5,6],
    [7,8,9],
    [10,'J','Q','K','A']
  ];
if (cards[0].includes(card))
{count ++}
  
  else if(cards[2].includes(card))
  {count--} 
  if(count >= 1){
    return `${count} Bet`
  }
    return `${count} Hold`
};

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));
console.log( cc(2) , cc('J'), cc(9), cc(2), cc(7));
console.log(cc(2),cc(2),cc('K'),cc('A'));
console.log(cc(2),cc(2),cc(10));
console.log(cc(10),cc('J'),cc('Q'),cc('K'),cc('A'));
