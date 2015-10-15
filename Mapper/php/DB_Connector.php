<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DB_Connector
 *
 * @author EricGummerson
 */

require "Common.php";

class DB_Connector {
    //put your code here
    
    private $conn;
    
    public function __construct() {
        
    }
    
    public function openConn(){
        if($this->conn != null){
            $this->conn = new clsDBbluemonitor_Librarian();
            console.log("Opened new connection");
        }else {
            console.log("Connection has already been established");
        }
    }
    
    public function query($fields, $stationId){
        
        if($this->conn != null){
            console.log("Connection open, attempting to query");
        }else {
            console.log("Connection not open");
        }
        
    }
    
    
    public function closeConn(){
        if($this->conn != null){
            console.log("Closed the connection");
            $this->conn->close();
            unset($conn);
            $conn = null;
        }else {
            console.log("Connection is already closed");
        }
        
    }
    
    
}
