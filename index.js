require("dotenv").config()
const express = require("express")
const { warn } = require("node:console")
const Mysql = require("mysql2").createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port,
    database: process.env.database
})

const App = express()
App.use(require('cookie-parser')())
App.get("/",(req,res)=>{
    let Cache = {}   
    Mysql.query("select * from main",(err,result,fields)=>{
    result.forEach(e=>{Cache[e.Id] = e.Piada})
    return res.json({Cache}).status(200)})
    })
    
    
    // Jockers Tasks mobiles gameys perfect ninght blue
App.post("/post/:Piada",(req,res)=>{Mysql.query("INSERT INTO main (piada) values (?)",[req.params.Piada],(err,result,fields)=>{
    if (!err){
        console.log(`Resultado: ${req.params.Piada} Salvo!`)
        return res.send("# Sucess").status(200)
    }
})})

App.put("/Update/:id/:value",(req,res)=>{
    Mysql.query("UPDATE main SET piada = ? where id = ?",[req.params.value,req.params.id],(err,results,fields)=>{
        if (!err){
            console.log("Sucess!")
            return res.send("# Sucess").status(200)
        }
    })
})

App.delete("/Delete/:id",(req,res)=>{
    Mysql.query("DELETE FROM main where id = ?",[req.params.id],(err,results,fields)=>{
            console.log("Sucess!")
            return res.send("# Sucess").status(200)
    })
})

App.listen(5000,(error)=>{
    console.log("Starting!")
})