
<html>


    <head>
        <link rel="shortcut icon" href="">

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="js/libs/jquery/jquery.js"></script>
        <script type="text/javascript" src="js/libs/jqueryui/jquery-ui.js"></script>
        <script type="text/javascript" src="js/sorttable.js"></script>
        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>      

        <link type="text/css" rel="stylesheet" href="css/basecss.css">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h1>Google Maps - Visible Markers In Bounds</h1>
        <div id="map-canvas"></div>
        <input id="pac-input" class="controls" type="text" placeholder="Search Box">
        <script type="text/javascript" src="js/Mapper.js"></script>
        
        
        <div id="storeTableDiv">
            <h2><span></span>Stores</h2>

            <table id="storeTable" class="sortable">
                <thead>
                    <tr><th id="storeID" class>Store ID</th><th id="lat">Lat</th><th id="long">Long</th><th id="alarms">Alarms</th></tr>
                </thead>
                <tbody>                    

                </tbody>

            </table>
        </div>

        <?php
        // put your code here
        include_once "php/Store.php";
        // Some fake markers
        $stores = [];
        // [store ID, storeTemp, outsideTemp, energy, moneyPerHour], lat, long
        $stores[0] = new Store(["526", 75, 35, 100, 20], 43.61232, -79.69047);
        $stores[1] = new Store(["510", 75, 35, 100, 20], 44.09399, -79.48975);
        $stores[2] = new Store(["524", 75, 35, 100, 20], 43.62268, -79.50715);
        $stores[3] = new Store(["512", 75, 35, 100, 20], 43.40669, -80.39179);
        $stores[4] = new Store(["535", 75, 35, 100, 20], 43.73066, -79.45622);

        foreach ($stores as $s) {
            //echo $s . " -- Adding to google maps<br>";
            //echo var_dump($s);
            // addMarker(id, latitude, longitude) JS 
            echo $s->markerJS();
        }
        ?>
    </body>
</html>
