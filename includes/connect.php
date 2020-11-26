<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'idp_profdata',//database name
        'charset' => 'utf8'//language
    );

    //set connection to database
    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials,user and password
    $db_user = 'root';
    $db_pass = '';//mac need password, window user dont need password

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);//make connection to databse
       // var_dump($pdo);//dump information about a variable. 
       // echo "you are in! enjoy the show";
       //echo is almost like console.log
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }