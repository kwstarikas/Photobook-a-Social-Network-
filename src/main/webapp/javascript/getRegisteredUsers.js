/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getRegisteredUsersAjaxPOST() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            var usersList = "<ul class=\"list-group\">";
            myObj.forEach(function(item){
                //console.log(item.userName, item.email);
                usersList += "<li class=\"list-group-item\">" 
                        + item.userName 
                        + " " 
                        + item.email 
                        + "</li>";
            });
            usersList += "</ul>";
            document.getElementById("test").innerHTML = this.responseText;
        }
    };
    xhr.open('POST', 'registeredUsersServlet');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}


