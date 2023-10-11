<?php
    session_start();
    header('Access-Control-Allow-Origin: http://localhost:3000');

    
    $user = $_POST['username'];
    $key = $_POST['password'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "api-database";

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if($conn->connect_error)
    {
        die("Connection Failed: " . $conn->connect_error);
    }

    $query = mysqli_query($conn, "SELECT * FROM `api-credentials` WHERE username = '$user' AND passCode = '$key'");
    if(mysqli_num_rows($query) > 0)
    {
        echo("login-true");
    }
    else
    {
        echo("login-false");
    }

?>
