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
class DB_Connector {

    //put your code here

    private $conn;

    public function __construct() {
        $this->conn = null;
    }

    public function openConn() {
        if ($this->conn == null) {

            $this->conn;
            echo "Opened new connection";
        } else {
            echo "Connection has already been established";
        }
    }

    public function query($fields, $stationId) {

        if ($this->conn != null) {
            echo "Connection open, attempting to query";
        } else {
            echo "Connection not open";
        }
    }

    public function closeConn() {
        if ($this->conn != null) {
            echo "Closed the connection";
            $this->conn->close();
            unset($conn);
            $conn = null;
        } else {
            echo "Connection is already closed";
        }
    }

}
