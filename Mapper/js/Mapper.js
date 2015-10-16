
var markers;
var map;
var bounds;

function initialize() {


    if (map === undefined) {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        markers = [];
        bounds = new google.maps.LatLngBounds();

        var defaultLoc = new google.maps.LatLng(47.8258663, -122.30983839999999);
        var defaultLoc2 = new google.maps.LatLng(47.7752851, -122.3448616);
        bounds.extend(defaultLoc);
        bounds.extend(defaultLoc2);
        map.fitBounds(bounds);

        var marker = new google.maps.Marker({
            map: map,
            title: "Costco Lynwood",
            position: new google.maps.LatLng(47.8258663, -122.30983839999999)
        });

        markers.push(marker);
    }




//    // Create the search box and link it to the UI element.
//    var input = /** @type {HTMLInputElement} */
//            (
//                    document.getElementById('pac-input'));
//    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
//
//    var searchBox = new google.maps.places.SearchBox(
//            /** @type {HTMLInputElement} */ (input));
//
//    // Listen for the event fired when the user selects an item from the
//    // pick list. Retrieve the matching places for that item.
//    google.maps.event.addListener(searchBox, 'places_changed', function () {
//
//        var places = searchBox.getPlaces();
//
//        for (var i = 0, marker; marker = markers[i]; i++) {
//            marker.setMap(null);
//        }
//
//        markers = [];
//        bounds = new google.maps.LatLngBounds();
//
//        for (var i = 0, place; place = places[i]; i++) {
//
//
//            // Create a marker for each place.
//            var marker = new google.maps.Marker({
//                map: map,
//                title: place.name,
//                position: place.geometry.location,
//                addr: place.formatted_address
//            });
//
//            markers.push(marker);
//            bounds.extend(place.geometry.location);
//
//
//        }
//        map.fitBounds(bounds);
//        printMarkers(markers);
//
//
//    });
}

//google.maps.event.addDomListener(window, 'load', initialize);


function printMarkers() {

    for (var i = 0; i < markers.length; i++) {
        console.log("Marker " + i + ", Location: " + markers[i].addr);
    }
    console.log("End of print");
}


function addMarker(id, latitude, longitude) {

    console.log("Trying to add " + id + " to the map");
    //alert("Adding marker " + id);
    if (map === undefined) {
        console.log("Made a new map")
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        markers = [];
        bounds = new google.maps.LatLngBounds();
    } else {
        console.log("Map defined now adding")
    }



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


function printTo(st) {
    $('#jsOutput').text(st);
}