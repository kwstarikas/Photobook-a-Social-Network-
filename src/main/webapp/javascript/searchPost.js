/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function searchPost() {
    console.log("in searchPost");
    var username = document.getElementById("searchforpost").value;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {

        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            if (myObj === "") {
                document.getElementById("searchforpost").innerHTML = "<span style='color: red;'>Invalid User name </span>";
            } else {
                var usersList = "<ul class=\"list-group\">";
                console.log(myObj);
                myObj.forEach(function(item) {

                    usersList += "<li class=\"list-group-item\">"
                    "Post id : " + item.postID +
                        "<br> Username: " +
                        item.userName +
                        "<br>Description : <br> " +
                        item.description +

                        " <br>lat: " +
                        item.latitude +
                        "<br>long " +
                        item.longitude +
                        "<br>Created at:" +
                        item.createdAt +

                        "</li>";
                });
                usersList += "</ul>";
                console.log(usersList);
                document.getElementById("searchforpost").innerHTML = usersList;
            }
        }


    }

    xhr.open('POST', 'searchPost');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + username);
}