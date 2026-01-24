// const user = new Object()
const user = {}

user.id = "123abc"
user.name = "Sammy"
user.isLoggedIn = false

// console.log(user);

const regularUser = {
    email: "some@gmail.com",
        fullname: {
            userfullname: {
            firstname: "zeel",
            lastname: "barot"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id:1,
        email: "z@gmail.com"
    }
]

// users[1].email;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));
