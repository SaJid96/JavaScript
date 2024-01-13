const accountID=33221;
let accountEmail="sajid@gmail.com";
var accountPassword="jaipur";
accountCity="Bengaluru";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountID,accountEmail,accountPassword,accountCity,accountState);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);
