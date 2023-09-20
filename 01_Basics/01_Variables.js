const accountId=144553
let accountEmail="swapnil@gmail.com"
var accountPassword="1234"
accontCity = "Pune"

// accountId=13   not allowed because modifying costant variable not allowed
accountEmail = "sk@gmail.com"
accountPassword = "21466145"
accountCity = "Jalgoan"
/*Prefer not to use var
because of issue in block */
console.log(accountId)
/*using this we can print all variables value in table format and at one time */
console.table([accountEmail,accountPassword,accontCity])
