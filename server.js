
var express = require('express')
const app = express()

app.get('/', function(res,res){
 res.send('Hello World')
})

const server = app.listen(3000, () =>{
    const host= server.address().address
    const port = server.address().port

    console.log(`Listening at http://${host}:${port}`)
})