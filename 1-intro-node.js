// 10
const amount = 8
if(amount < 10){
    console.log("smaller number")
}
else{
    console.log("bigger number")
}
console.log(`hey its my first node app!!! ${amount}`)

//GLOBALS - NO WINDOW !!!! 12

//__dirname = path to current directory
//__filename = file name
// require = function to use module (commonjs)
// module = info about current module (file)
// process = info about env where the program is being executed
console.log(__dirname)
setInterval(() => {
    console.log("hello")
}, 1000)

//Modules 13
const john = "john"
const peter = "peter"

const sayhi = (name) => {
    console.log(`hey there ${name}`)
} 
sayhi("mohit")
sayhi(john)
sayhi(peter)

//Modules 14 & 15 16
const name = require("./2-module")
const sayhi = require("./3-module")
const date = require('./4-alternate-flavour')
console.log(date)
require('./mind-graned')
sayhi(name.john)
sayhi(name.peter)
sayhi("mohit")