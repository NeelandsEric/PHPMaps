<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Table
 *
 * @author EricGummerson
 */
class Table {
    //put your code here
    public $title;
    public $numFields;
    public $sizeWidth;
    public $sizeHeight;
    public $titleFields;
    public $values;
    
    function __construct($title) {
        $this->title = $title;
        $this->numFields = 4;
        $this->sizeWidth = 400;
        $this->sizeHeight = 400;
        $this->titleFields = ["Store #", "Alaram Count", "Refrig $/ton", "HVAC $"];     
        $this->values = [];
    }
    
    function getTitle() {
        return $this->title;
    }

    function getNumFields() {
        return $this->numFields;
    }

    function getSizeWidth() {
        return $this->sizeWidth;
    }

    function getSizeHeight() {
        return $this->sizeHeight;
    }

    function getFields() {
        return $this->titleFields;
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function setNumFields($numFields) {
        $this->numFields = $numFields;
    }

    function setSizeWidth($sizeWidth) {
        $this->sizeWidth = $sizeWidth;
    }

    function setSizeHeight($sizeHeight) {
        $this->sizeHeight = $sizeHeight;
    }

    function setFields($fields) {
        $this->titleFields = $fields;
    }

    
    function generateTable(){
        
        
        
        
    }

}
