//Syncronus fileSystem Module
const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})
console.log('done')
console.log('final')

//Asyncronus filsSystem module
const {readFile, writeFile, read} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done')
        })
    })
})
console.log('starting next task')