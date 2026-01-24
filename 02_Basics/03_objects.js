// singleton  // Constructor
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Zeel",
    "full name": "Zeel Barot",
    [mySym]: "mykey1",
    age: 20,
    location: "Vadodara",
    email: "zeel@google.com",
    isLoggedIn: false,
    lastoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "zeel@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zeel@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

