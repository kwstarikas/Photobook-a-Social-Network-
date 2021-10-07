"use strict";

var lat = 0;
var long = 0;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("HTML5 Detected. Geolocation is ON.")
} else {
    document.getElementById("is_valid").innerHTML = "Geolocation is not supported by this browser.";
    document.getElementById("checkbtn").disabled = true;
}


function checkAddress() {
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;

    var apiLink = "https://nominatim.openstreetmap.org/search?country=" + country + "&city=" + city + "&street=" + address +
        "&format=json";
    es6Get(apiLink);
}

function es6Get(url) {
    fetch(url).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
        if (data.length > 2) {
            document.getElementById("is_valid").innerHTML = "Valid";
            document.getElementById("is_valid").style.color = "green";
            getLocation();
        } else {
            document.getElementById("is_valid").innerHTML = "Invalid";
            document.getElementById("is_valid").style.color = "red"
        }
    }).catch(function() {
        console.log("BOO!;)")
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("HTML5 Detected. Geolocation is ON.")
    } else {
        document.getElementById("is_valid").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

    long = position.coords.longitude
    lat = position.coords.latitude

    var map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());

    console.log(position)

    var lonLat = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
        );

    var zoom = 16;

    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);

    markers.addMarker(new OpenLayers.Marker(lonLat));

    map.setCenter(lonLat, zoom);

    fillAdress(position.coords.latitude, position.coords.longitude)

}


function fillAdress() {
    console.log("in full address");
    let url = "https://nominatim.openstreetmap.org/reverse?lat=" + lat + "&lon=" + long + "&format=json"

    fetch(url).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)

        document.getElementById("country").value = data.address.country;
        document.getElementById("town").value = data.address.city;
        document.getElementById("address").value = data.address.road;

    }).catch(function() {
        console.log("BOO!;)")
    })

}

function displayCapture() {

    document.getElementById("image_cap").style.display = "block"

}


function hideDisplay() {
    document.getElementById("image_cap").style.display = "none"
}

function displayUpload() {
    document.getElementById("show_upload").style.display = "block"
}