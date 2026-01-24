function sayMyName(){
    console.log("Z");
    console.log("E");
    console.log("E");
    console.log("L");
}

// sayMyName()

function addTwoNumbers(number1,number2){
    // let result = number1+number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result:", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Zeel"));
console.log(loginUserMessage());