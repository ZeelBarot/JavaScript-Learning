// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a);
    
}
 
// console.log(a);
// console.log(b);
// console.log(c);

// ********** Commented are errors to check scope **********

function one(){
    const username = "zeel"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if(true){
    const username = "zeel"
    if (username === "zeel"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++ interesting ++++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)
