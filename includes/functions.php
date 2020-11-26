<?php
//result will store the database request rsults 
//so that we can encode and return them to indx.php
$result=array();

function getAllUsers($conn){        
   $query = "SELECT * FROM profdata";
   $runQuery=$conn->query($query);
   while($row=$runQuery->fetchALL(PDO::FETCH_ASSOC)){
       //store the result
       $result[]=$row;
   }
   //return $result;
  echo(json_encode($result));
  //translate --window use echo, mac use var_dump   
    }


    //get a specific user
    function getSingleUser($conn,$id){        
        $query = "SELECT * FROM profdata where id=". $id ."";
        $runQuery=$conn->query($query);
        while($row=$runQuery->fetchALL(PDO::FETCH_ASSOC)){
            $result[]=$row;
        }
       echo(json_encode($result));
         }



