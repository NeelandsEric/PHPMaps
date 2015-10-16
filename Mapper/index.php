
<html>


    <head>
        <link rel="shortcut icon" href="">

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="js/libs/jquery/jquery.js"></script>
        <script type="text/javascript" src="js/libs/jqueryui/jquery-ui.js"></script>
        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>      

        <link type="text/css" rel="stylesheet" href="css/basecss.css">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
         <div id="map-canvas"></div>
        <input id="pac-input" class="controls" type="text" placeholder="Search Box">
        <script type="text/javascript" src="js/Mapper.js"></script>
        <div id="jsOutput">JS Output</div>
        
        <div id="phpOutput">PHP BRO</div>
        <?php
        // put your code here
        include_once "php/Store.php";
        // Some fake markers
        $stores = [];
        // [store ID, storeTemp, outsideTemp, energy, moneyPerHour], lat, long
        $stores[0] = new Store(["526", 75, 35, 100, 20], 43.612326, -79.690479);
        $stores[1] = new Store(["510", 75, 35, 100, 20], 44.09399, -79.489758);
        $stores[2] = new Store(["524", 75, 35, 100, 20], 43.622682, -79.507152);
        $stores[3] = new Store(["512", 75, 35, 100, 20], 43.406692136925, -80.391798020282);
        $stores[4] = new Store(["535", 75, 35, 100, 20], 43.730669, -79.456223);
        
        foreach($stores as $s){
            echo $s." -- Adding to google maps<br>";
            
            // addMarker(id, latitude, longitude) JS 
            echo $s->markerJS();
        }               
        
        ?>
    </body>
</html>
