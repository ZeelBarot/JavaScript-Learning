// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>1);


// console.log("2">1);
// console.log("02">1);


/* 
The reason is that an equality check ( == )
and comparisons ( >, <, >=, <= ) work differently.
Comparisons convert null to a number, treating it as 0.
*/

//That's why
console.log(null > 0);      // => false     
console.log(null == 0);        
console.log(null >= 0);     // => true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);
