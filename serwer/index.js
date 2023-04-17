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

app.get("/login/:user/:pass", (req, res)=>{
    const user = req.params.user
    const pass = req.params.pass

   // console.log(`user: ${user}, pass: ${pass}`)
    
    const sql = `SELECT * FROM users WHERE login = "${user}"`
    con.query(sql, (err, results, fields)=>{
        console.log(results)
        if(err) console.log(err)
        else{
            
            var status = {"status": false, "upr":""}
            
            if(results.length!=0){
               
                if(results[0].haslo == pass){
                    status.status = true
                    status.upr = results[0].uprawnienia
                }

            } else {
                status.status = false
                status.upr = "niepoprawny login lub hasło"
            }
           
            
            res.send(status)
        }
    })
})




app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})