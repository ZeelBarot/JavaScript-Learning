# 1. Primitive 
## There are 7 types:
- String
- Number 
- Boolean 
- null
- undefined 
- Symbol
- BigInt

```
const score = 100
const scoreValue = 100.3

const inLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 65432123456n // "n" determines BigInt datatype
```

# 2. Reference (Non-Primitive)
## There are 3 types:
- Array
```
const heros = ["Ironman", "Spiderman", "Thor"]
```
- Objects
```
let myObj = {
    name: "Zeel",
    age: 21
}
```
- Functions
```
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
```

https://262.ecma-international.org/5.1/#sec-11.4.3