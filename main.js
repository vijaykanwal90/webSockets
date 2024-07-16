const http = require("Https")
const express = require("exress")
const path = require('path')
const server = http.createServer(app);


app.use(express.static)
app.get("/",(rewq,res)=>{
    return res.sendFile("./public/index.html")
})

server.listen(9000,()=> console.log(`server started at `))