<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
    if ($dbc = mysqli_connect('localhost', 'root', '', 'paintstore_db')) {
        $fname = $_POST['finame'];
        $lname = $_POST['laname'];
        $email = $_POST['email'];
        $pass = $_POST['passw'];
        $phone = $_POST['mobile'];
        $sql = "INSERT INTO register(fname, lname, mail, pass, phno) VALUES('$fname','$lname','$email','$pass', '$phone')";
        $query = mysqli_query($dbc, $sql);
        if ($query) {
            echo "Entry Successful";
        } else {
            echo "Error in entry" . mysqli_error($dbc);
        }
    } else {
        die("Connection failed:" . mysqli_connect_error());
    }
    mysqli_close($dbc);
}
else{
    echo "connection failed";
}
?>