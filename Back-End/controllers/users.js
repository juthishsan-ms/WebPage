const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});

exports.login = async (req, res) => {
    try {
        const { email, pass } = req.body;
        if (!email || !pass) {
            return res.status(400).render("login", { msg: "Please Enter Your Email or Password", msg_type: "error" });
        }
        conn.query('select * from registration where Email=?', [email], async (error, result) => {
            console.log(result);
            if (result.length <= 0) {
                return res.status(401).render("login", { msg: "Please Enter Your Email or Password", msg_type: "error" });
            } else {
                if (!(await bcrypt.compare(pass, result[0].Password))) {
                    return res.status(401).render("login", { msg: "Email or Password is incorrect", msg_type: "error" });
                } else {
                    const id = result[0].ID;
                    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN,
                    })
                    //console.log("Token is " + token);
                    const cookieOptions = {
                        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000), httpOnly: true,
                    }
                    res.cookie("Juthishan", token, cookieOptions);
                    res.status(200).redirect("/home.html");
                }
            }
        })
    } catch (error) {
        throw error;
    }

}

exports.register = (req, res) => {
    console.log(req.body);

    /*res.send("Form submitted");
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const pass = req.body.pass;
    const mobile = req.body.mobile;*/

    const { fname, lname, email, pass, cpass, mobile } = req.body;

    conn.query(
        "select email from registration where email=?",
        [email],
        async (error, result) => {
            if (error) throw error;

            if (result.length > 0) {
                return res.render("register", { msg: "You have already registered. Please Login", msg_type: "error" });
            } else if (pass !== cpass) {
                return res.render("register", { msg: "Password does not match", msg_type: "error" });
            }
            let hashedPassword = await bcrypt.hash(pass, 8);
            //console.log(hashedPassword);

            conn.query('insert into registration set ?', { Firstname: fname, Lastname: lname, Email: email, Password: hashedPassword, Cpassword: hashedPassword, Phno: mobile }, (err, result) => {
                if (err)
                    throw err;
                else {
                    console.log(result);
                    return res.render("register", { msg: "Registration Successful. Please Login", msg_type: "good" });
                }
            });
        }
    )
};

exports.isLoggedIn = async (req, res, next) => {
    //req.name="Check Login";
    //console.log(req.cookies);
    if (req.cookies.Juthishan) {
        try {
            const decode = await promisify(jwt.verify)(req.cookies.Juthishan, process.env.JWT_SECRET);
            //console.log(decode);
            conn.query("select * from registration where ID=?", [decode.id], (err, results) => {
                //console.log(results);
                if (!results) {
                    return next();
                }
                req.user = results[0];
                return next();
            }
            );
        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        next();
    }
}

exports.logout = async (req, res) => {
    res.cookie("Juthishan", "logout", {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true,
    })
    res.status(200).redirect("/home.html");
}