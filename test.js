const express = require('express')
const application = express()

application.listen(3000, function () {
    console.log('Server open')
})

application.get('/', function (req, res){
    console.log('Request checked')
    res.send('Connect checked')
})