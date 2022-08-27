const { Socket } = require('dgram');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:{
        origin:true,
        credentials:true,
        methods:['GET','POST']
    }  
});
io.on('connection',(socket)=>{
    console.log("anda chat")
    socket.on("sendMesagge",(object)=>{
        console.log("test= "+object.text)
 
        socket.broadcast.emit("resiveMensagge",object); 
    })
})
app.get('/',(req,res)=>{
    res.send('<h1>hola mundo</>')
});
http.listen(3000,()=>{
    console.log("hola ando ")
})