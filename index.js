const express = require("express")
const app=express()
const phones=require('./phones.json')
const port=4000

app.get('/',(req,res)=>{
    res.send("this is phone page server is")
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    console.log('i need after for id ',id)
    const phone=phones.find(phone=>phone.id===id)
    res.send(phone)
})

app.listen(port, ()=>{
    console.log(`by the way ,this local host is running in ${port}`)
})