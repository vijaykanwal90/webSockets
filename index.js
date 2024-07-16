const {createServer} = require('node:http')
const express = require("express")
const path = require("path")
const {Server} = require("socket.io")

// socket.io
const app = express()
const server = createServer(app)
const io  = new Server(server) 


io.on('connection',(socket)=>{
   
    socket.on('user-message',(message)=>{
        io.emit('message',message)
    })
})

app.use(express.static(path.resolve("./public")))
app.get("/",(req,res)=>{
    return res.sendFile("./public/index.html")
})

server.listen(9000,()=> console.log(`server started at PORT:9000`))