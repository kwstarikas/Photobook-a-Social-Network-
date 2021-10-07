/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getActiveSessions() {
    // Check browser support
    // if (typeof(Storage) !== "undefined") {
    //   // Store
    //   sessionStorage.setItem("lastname", "Smith");
    //   // Retrieve
    //   document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
    // } else {
    //   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    // }

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(this.responseText);
            var usersList = "<ul class=\"list-group\">";
            myObj.forEach(function(item) {
                usersList += "<li class=\"list-group-item\">" +
                    "<br> Username: " +
                    item.userName +
                    "</li>";
            });
            usersList += "</ul>";

            document.getElementById("show10RecentPostParagraph").innerHTML = usersList;
        }
    };
    xhr.open('GET', 'getSessions');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();


}