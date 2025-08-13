const accountId = 1697
let accountEmail = "varun@gmail.com"
var accountPassword = "varun123"
accountCity = "Delhi"
let accountState

//accountId = 2 //not allowed, const cannot be reassigned
accountEmail = "new@gmail.com"
accountPassword = "new123"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
