const accountId = 324765
let accountEmail = "ashwanilalsah7463@gmail.com"
var accountPassword = "ds,jyg"
accountCity = "Bhopal"
let accountState = "madhyaPredesh"

//accountId = 2 , not allowed

accountEmail = "abc@google.com"
accountPassword = "ksdjyfg"
accountCity = "Mumbai"




console.log(accountId);
//prefer not to use var becouse of issue in block scope and functional scope

console.table([accountEmail, accountPassword, accountId, accountCity])