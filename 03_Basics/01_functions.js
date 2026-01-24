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
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "zeel",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
