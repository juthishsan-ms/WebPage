<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
    $conn = mysqli_connect('localhost', 'root', ' ', 'paintstore_db') or die("Connection failed: " . mysqli_connect_error());

    //if (isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['mail']) && isset($_POST['pass']) && isset($_POST['mob'])) {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['mail'];
        $pass = $_POST['pass'];
        $phno = $_POST['mob'];

        $sql = "INSERT INTO registration (Firstname, Lastname, Email, Pass, Mobile) VALUES ('$fname', '$lname', '$email', '$pass', '$phno')"; // Removed single quotes around column names

        $query = mysqli_query($conn, $sql);
        if ($query) {
            echo 'Entry Successful';
        } else {
            echo 'Error Occurred';
        }
    }
//}
?>