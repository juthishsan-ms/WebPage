const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
var mysql = require('mysql');

app.use(express.static(path.join(__dirname, '..', 'Front-End')));
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('view engine', 'pug');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "paintstore_db"
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("connection successful");
})

/*app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'Front-End', 'account.html');
    res.sendFile(filePath);
});*/

app.post('/', (req, res) => {
    console.log(req.body);
    var sql = "insert into registration values(null,'"+req.body.fname+"','"+req.body.lname+"','"+req.body.email+"','"+req.body.pass+"',"+req.body.mobile+")";
    conn.query(sql, (err) => {
        if (err) throw err;

        console.log("Data saved");
        const filePath = path.join(__dirname, '..', 'Front-End', 'account.html');
        res.sendFile(filePath);

        conn.end();
    });
});

app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.pass;

    const sql = "SELECT * FROM registration WHERE email = ? AND password = ?";
    const values = [email, password];

    conn.query(sql, values, (err,results)=>{
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        if(results.length>0){
            const filePath = path.join(__dirname, '..', 'Front-End', 'home.html');
            res.redirect(filePath);
        } else {
            res.status(401).send('Authentication failed');
        }
    })
})

app.listen(port, () => console.log(`Express api listening on port ${port}`));