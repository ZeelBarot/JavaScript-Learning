const accountId = 144452;
let accountEmail = "zeel.google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // undefined

// accountId=2;       Not Allowed

accountEmail = "zb@zb.com"
accountPassword = "21212"
accountCity = "Banglore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);