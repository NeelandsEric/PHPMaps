
var markers;
var map;
var bounds;
var ready = false;
var toAddMarkers = [];

function initialize() {



    map = new google.maps.Map(document.getElementById('map-canvas'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    markers = new Array();
    bounds = new google.maps.LatLngBounds();

//    var defaultLoc = new google.maps.LatLng(28.7, -127.5);
//    var defaultLoc2 = new google.maps.LatLng(48.85, -55.9);
//    bounds.extend(defaultLoc);
//    bounds.extend(defaultLoc2);
//    map.fitBounds(bounds);


    toAddMarkers.forEach(function (element, index, array) {

        console.log("Element @ " + index);
        console.log(element);
        var la = element["lat"];
        var lo = element["long"];
        var id = element["id"];

        console.log("id: " + id + "lat: " + la + "long: " + lo )
        
        //var latlng = {lat: la, lng: lo};
        var latlng = new google.maps.LatLng(la, lo);

        var marker = new google.maps.Marker({
            map: map,
            title: id,
            position: latlng
        });

        markers.push(marker);
        bounds.extend(latlng);
        map.fitBounds(bounds);

    });
    
    

    ready = true;

    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */
            (
                    document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    var searchBox = new google.maps.places.SearchBox(
            /** @type {HTMLInputElement} */ (input));



    
    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.
    map.addListener(searchBox, 'places_changed', function () {

        console.log("Search disabled");

        return;

        var places = searchBox.getPlaces();

        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        markers = [];
        bounds = new google.maps.LatLngBounds();

        for (var i = 0, place; place = places[i]; i++) {


            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location,
                addr: place.formatted_address
            });

            markers.push(marker);
            bounds.extend(place.geometry.location);


        }
        map.fitBounds(bounds);
        printMarkers(markers);


    });
    
    
    map.addListener('bounds_changed', mapMoved());
    


}

google.maps.event.addDomListener(window, 'load', initialize);


function mapMoved(){
    printVisibleMarkers();
    
}

function printMarkers() {

    for (var i = 0; i < markers.length; i++) {
        console.log("Marker " + i + ", Location: " + markers[i].addr);
    }
    console.log("End of print");
}


function addMarker(id, latitude, longitude) {

    if (!ready) {
        console.log("1 - toAddMarkers");
        //alert("Adding marker " + id);
        var marker = [];
        marker["id"] = id;
        marker["lat"] = latitude;
        marker["long"] = longitude;
        toAddMarkers.push(marker);
    } else {
        console.log("2 - addMarker");
        var latlng = {lat: latitude, lng: longitude};

        var marker = new google.maps.Marker({
            map: map,
            title: id,
            position: latlng
        });

        markers.push(marker);
        bounds.extend(latlng);
        map.fitBounds(bounds);
    }


}


function printTo(st) {
    $('#jsOutput').text(st);
}


function printVisibleMarkers(){
    
    markers.forEach(function(element, index, array){
        
        console.log(element);
        
        if(element.visible){
            console.log("Element is visible");
        }else {
            console.log("Element is visible");
        }
        
        
    });
}