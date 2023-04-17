const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

const port = 3000

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users1"
})

con.connect((err)=>{
    if(err) console.log(err)
    else console.log("Połączono z bazą danych")
})

app.get("/login", (req, res)=>{
    
    const sql = `SELECT * FROM users`
    con.query(sql, (err, results, fields)=>{
        if(err) console.log(err)
        else res.send(results)
    })
})




app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})