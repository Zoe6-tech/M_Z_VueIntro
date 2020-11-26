<?php
  //include function and connect
    include('connect.php');
    include('functions.php');
   //if we need on piece, run a getOne function
   //else get all the piece
   if(isset($_GET["id"])){
       //get one item from the database-whichever one you click on and asked for in the UI
       //like select * from  profdata where id=($_GET['id'])
       $targetID=$_GET["id"];
       $result=getSingleUser($pdo,$targetID);//$pdo like a path
       return $result;
   }else{
       //user must want to see all items in the database
       $allUsers=getAllUsers($pdo);//we need access before we ask data,like a path
       return $allUsers;
   }