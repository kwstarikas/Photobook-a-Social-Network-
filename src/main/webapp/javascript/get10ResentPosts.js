/* global OpenLayers, map */
function get10Posts() {

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            var i = 0;
            var myObj = JSON.parse(this.responseText);
            var usersList = "<ul class=\"list-group\">";
            myObj.forEach(function(item) {
                
                var postID = item.postID;
                
                usersList += "<li class=\"list-group-item\">" +
                    "Post id : " + item.postID +
                    "<br> Username: " +
                    item.userName +
                    "<br>Description : <br> " +
                    item.description +
                    //" <br>" +
                    //item.resourceURL +
                    " <br>lat: " +
                    item.latitude +
                    "<br>long " +
                    item.longitude +
                    "<br>Created at:" +
                    item.createdAt +
                    "</li>";     
            
                usersList += "<div id=\"commentsList" + i + "\"></div>";
                i += 1;
                usersList += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"\">Show Comments</button>";
            
                return showComments(postID, i, usersList);
               
                usersList += "<div id=\"map\"></div>";
                //If lonlat exist create button "showMap"
                var lat = item.latitude.trim();
                var lon = item.longitude.trim();
                if (isNaN(lat) === false && isNaN(lon) === false) {
                    usersList += "<button type=\"button\" class=\"btn btn-secondary mb-4\">Show Map</button>";
                    console.log("Lat=", lat, "Lon=", lon);
                    showMap(lon, lat);
                }
            });
            usersList += "</ul>";
            document.getElementById("show10RecentPostParagraph").innerHTML = usersList;
        }
    };
    xhr.open('GET', 'get10Posts');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}


function showMap(x, y) {
  map = new OpenLayers.Map('map');
  map.addLayer(new OpenLayers.Layer.OSM());
  var lonLat = new OpenLayers.LonLat(x, y).transform(
    new OpenLayers.Projection('EPSG:4326'), // transform from WGS 1984
    map.getProjectionObject() // to Spherical Mercator Projection
  );

  var zoom = 16;
  var markers = new OpenLayers.Layer.Markers('Markers');
  map.addLayer(markers);
  markers.addMarker(new OpenLayers.Marker(lonLat));
  map.setCenter(lonLat, zoom);
}

function showComments(postID, i) {
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {

            var myObj = JSON.parse(this.responseText);
            var comments = document.getElementById("commentsList" + i);
            myObj.forEach(function(item){
                //console.log(item.comment);
                comments.innerHTML += 
                        "<p>" +
                        item.comment +
                        "<br>" +
                        "<\p>";
            });
        }
    };
    
    xhr.open('POST', 'showComments');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('postID=' + postID);
}

// console.log("in get 10 posts");
// $.ajax({
//     type: "GET",
//     url: "get10Posts",
//     success: function(data) {
//         console.log(data);
//         document.getElementById("show10RecentPostParagraph").innerHTML =
//             "<p> Post: " + data +
//             "</p>";
//     },
//     error: {
//         400: function(data) {
//             console.log("Coudnt fetch 10 recent posts");
//         }
//     }

// });