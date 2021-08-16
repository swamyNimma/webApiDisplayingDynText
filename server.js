var express= require('express')
var bodyParser=require('body-parser')
var app=express()


app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
var messages=[]
app.get('/message',(req,res)=>{
    res.send(messages)
})

app.post('/message',(req,res)=>{
    console.log("in server");
    messages.push(req.body)
    console.log("after server"+req.body);
    res.sendStatus(200)
})
var server=app.listen(3000,()=>{
    console.log("server is listening on port", server.address().port)
})
