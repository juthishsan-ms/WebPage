var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "paintstore_db"
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connection successful");
    var sql="INSERT INTO registration (Firstname,Lastname,Email,Password,Phno) VALUES ?";
    var values=[
        ['Juthishsan','M S','juthishsanms.21bcr@kongu.edu','juthish123','9965929856']
    ]
    conn.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("records Inserted: "+result.affectedRows)
    })
});