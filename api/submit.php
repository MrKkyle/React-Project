<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $user = $_POST['username'];
    echo ("Hello from server: $user");


/*
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
echo("submitted");

$name = $_POST['username'];
$passCode = $_POST['password'];

echo("Here is the name " . $name);


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "api-database";



$conn = mysqli_connect($servername, $username, $password, $database);
if($conn->connect_error)
{
    die("Connection Failed: " . $conn->connect_error);
}

$names = mysqli_real_escape_string($conn, $_POST['name']);
echo("S" . $names);
*/

?>
