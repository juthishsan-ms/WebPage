const express = require("express");
const mysql = require('mysql');
const doenv = require("dotenv");
const path = require('path');
const hbs = require('hbs');
const app = express();

doenv.config({
    path:'./login.env',
})

const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connection successful");
    
});

app.use(express.static(path.join(__dirname, '..', 'Front-End')));
app.set("view engine","hbs");

app.use('/', require("./routes/pages"));
app.use('/auth', require("./routes/auth"));

app.listen(5000,()=>{
    console.log("Server running in port 5000");
})