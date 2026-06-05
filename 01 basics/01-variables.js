const accountId = 144553
let accountEmail = "shashi@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sh@hc.com"
accountPassword = "221133"
accountCity = "Mumbai"

console.log("accountId");

/*
prefer not to use var and use let and const instead of var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
