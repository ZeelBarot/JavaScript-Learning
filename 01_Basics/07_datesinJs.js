// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 21);
// let myCreatedDate = new Date(2026, 0, 21, 5, 3);
let myCreatedDate = new Date("2026-01-21");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());       // Used to compare TimeStamp
// console.log(Math.floor(Date.now()/1000));   // Seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());    // months starts from index 0
console.log(newDate.getDay());

// `${newDate.getDay} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})