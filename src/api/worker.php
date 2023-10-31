<?php
    session_start();
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "api-database";

    $text = $_POST['text'];

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if($conn->connect_error)
    {
        die("Connection Failed: " . $conn->connect_error);
    }

    if ($_POST["action"] == "equipment")
    {
        $query = "SELECT Equipment FROM aesperia";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row['column']);
    }
    else if($_POST["action"] == "equipment-update")
    {
        $query = "UPDATE aesperia SET Equipment = '$text'";
    }   

    else if ($_POST["action"] == "PVP")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "PVP-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "aesperiaEnemies")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "aesperiaEnemies-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if($_POST["action"] == "aesperiaWorldBosses")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "aesperiaWorldBosses-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "veraEnemies")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "veraEnemies-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if($_POST["action"] == "veraWorldBosses")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "veraWorldBosses-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "domain9Enemies")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "domain9Enemies-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "domain9WorldBosses")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "domain9WorldBosses-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "ArtificialIsland")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "ArtificialIsland-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "Banges")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "Banges-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "Hykros")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "Hykros-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "Warren")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "Warren-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "confoundingAbyss")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    /* if action variable = logout */
    else if($_POST["action"] == "confoundingAbyss-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "graySpace")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if($_POST["action"] == "graySpace-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "innars")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if($_POST["action"] == "innars-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "miasmicSwamp")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "miasmicSwamp-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "Mirroria")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "Mirroria-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

    else if ($_POST["action"] == "twilightZone")
    {
        $isLogged = true;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }
    else if($_POST["action"] == "twilightZone-update")
    {
        $isLogged = false;
        $_SESSION['isLogged'] = $isLogged;
        echo json_encode($isLogged);
    }

?>