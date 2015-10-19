
var markers;
var map;
var bounds;
var hlIndex = -1;
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

        //console.log("Element @ " + index);
        //console.log(element);
        var la = element["lat"];
        var lo = element["long"];
        var id = element["id"];

        //console.log("id: " + id + "lat: " + la + "long: " + lo)

        //var latlng = {lat: la, lng: lo};
        var latlng = new google.maps.LatLng(la, lo);

        var marker = new google.maps.Marker({
            map: map,
            title: id,
            position: latlng
        });

        google.maps.event.addListener(marker, 'click', function () {
            clickMarker(marker);
        });

        //console.log(marker);
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
    google.maps.event.addListener(searchBox, 'places_changed', function () {


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

            google.maps.event.addListener(marker, 'click', function () {
                clickMarker(marker);
            });

            markers.push(marker);
            bounds.extend(place.geometry.location);



        }
        map.fitBounds(bounds);



    });

    geocodeMarkers(updateAddress);


    google.maps.event.addListener(map, 'idle', function () {
        showVisibleMarkers();


    });

}

function updateAddress(){
    console.log("update address done");
}



google.maps.event.addDomListener(window, 'load', initialize);


function geocodeMarkers(callback){
    console.log("update address");
    var geocoder = new google.maps.Geocoder();

    markers.forEach(function (element, index, array) {        
        geocoder.geocode({latLng: element.position}, function (responses) {
            if (responses && responses.length > 0) {
                console.log("geocoder: " + responses[0].formatted_address);
                element.addr = responses[0].formatted_address;
            } else {
                element.addr = 'Unknown';
            }
        });
    });
    console.log("update address calling back");
    if(typeof callback === 'function'){
        callback();
    }
}



function clickMarker(marker) {
    // find the selected row to save the highlight when moving the map
    console.log($('#storeTable .highlight td').id);
    var id = marker.title;
    //map.setCenter(marker.getPosition());
    $('#storeTable .highlight').addClass('nohighlight');
    $('#storeTable .highlight').removeClass('highlight');
    $('#' + id).removeClass('nohighlight');
    $('#' + id).addClass('highlight');
    

    //<tr id="526"><td>526</td><td>20</td><td>30</td><td>5</td></tr>
}

function printMarkers() {

    for (var i = 0; i < markers.length; i++) {
        console.log("Marker " + i + ", Location: " + markers[i].addr);
    }
    console.log("End of print");
}


function addMarker(id, latitude, longitude) {

    if (!ready) {
        //console.log("1 - toAddMarkers");
        //alert("Adding marker " + id);
        var marker = [];
        marker["id"] = id;
        marker["lat"] = latitude;
        marker["long"] = longitude;
        toAddMarkers.push(marker);
    } else {
        //console.log("2 - addMarker");
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


function showVisibleMarkers() {


    var b = map.getBounds();
    var marker;



    //$("#storeTableDiv").empty();
    $("table.sortable tbody").empty();

    markers = sortByKey(markers, "title");

    for (var i = 0; i < markers.length; i++) {
        marker = markers[i];


        if (b.contains(marker.getPosition()) === true) {
            var id = marker.title;
            var loc = marker.position; // tbd address
            var lat = loc.lat();
            var long = loc.lng();
            var highlight = i === hlIndex ? "highlight" : "nohighlight";
            //console.log(marker);

            //$('#storeTableDiv').append('<div id="' + id +'" class="store nohighlight">' + loc + '</div>');   
            $('table.sortable tbody').append('<tr id="' + id + '" class="'+highlight+'"><td id = "'+i+'">' + id + '</td><td>' + lat + '</td><td>' + long + '</td><td>' + marker.addr + '</td></tr>');
        }
    }

}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string")
        {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}