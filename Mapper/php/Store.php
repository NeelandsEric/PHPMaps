<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Store
 *
 * @author EricGummerson
 */
class Store {

    //put your code here

    public $id;
    public $storeTemp;
    public $outsideTemp;
    public $energy;
    public $moneyPerHour;    
    public $lat;
    public $long;

    function __construct($args, $lat, $long) {

        if (is_array($args)) {
            if (count($args) == 5) {
                $this->id = $args[0];
                $this->storeTemp = $args[1];
                $this->outsideTemp = $args[2];
                $this->energy = $args[3];
                $this->moneyPerHour = $args[4];                
            } else {
                $this->id = $args[0];
                $this->storeTemp = $this->outsideTemp = $this->energy = $this->moneyPerHour = 0;
            }
        } else {
            $this->id = $args;
            $this->storeTemp = $this->outsideTemp = $this->energy = $this->moneyPerHour = 0;
        }
                
        $this->lat = $lat;
        $this->long = $long;
    }

    function getId() {
        return $this->id;
    }

    function getStoreTemp() {
        return $this->storeTemp;
    }

    function getOutsideTemp() {
        return $this->outsideTemp;
    }

    function getEnergy() {
        return $this->energy;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setStoreTemp($storeTemp) {
        $this->storeTemp = $storeTemp;
    }

    function setOutsideTemp($outsideTemp) {
        $this->outsideTemp = $outsideTemp;
    }

    function setEnergy($energy) {
        $this->energy = $energy;
    }

    function getMoneyPerHour() {
        return $this->moneyPerHour;
    }

    function setMoneyPerHour($moneyPerHour) {
        $this->moneyPerHour = $moneyPerHour;
    }

    function getLong() {
        return $this->long;
    }

    function getLat() {
        return $this->lat;
    }

    function setLong($long) {
        $this->long = $long;
    }

    function setLat($lat) {
        $this->lat = $lat;
    }

    public function __toString() {
         $s = "ID: {$this->id} | Lat: {$this->lat} | Long: {$this->long}";
         return $s;
        
    }
    
    // generates the script code to make a google map marker
    public function markerJS(){
        $s = '<script type="text/javascript">addMarker("'.$this->id.'",'.$this->lat.",".$this->long.");</script>";
        return $s;
    }


}
