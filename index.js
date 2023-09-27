const express = require("express")
const server = express()

server.use(express.static("public"))

// server.get('/', (req, res) => {
//     console.log('test')
//     res.render("index")
// })

server.listen(8080)