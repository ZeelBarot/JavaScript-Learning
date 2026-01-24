const user = {
    username: "zeel",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "zeel"
//     console.log(this.username);
// }

// chai()


// const chai = () => {
//     let username = "zeel"
//     console.log(this);
// }

// chai() 


// const addTwo = (n1, n2) => {   // If we user paranthesis {} then you have to write retun
//     return n1 + n2
// }

const addTwo = (n1, n2) => (n1 + n2) // No need to write return keyword

console.log(addTwo(3,4));


// const myArray = [2,5,3,7,8]
// myArray.forEach()