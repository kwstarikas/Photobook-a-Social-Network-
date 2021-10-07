/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var timestamp;

function createPost() {
    timestamp = Math.floor(Date.now() / 1000);
    document.getElementById("newpostBody").innerHTML =
        "    <p id=\"show10RecentPostParagraph\">\n" +
        "    </p>" +
        "<label class=\"form-label\"> Timestamp: " + timestamp + "</label>" +
        "<div class=\"input-group mb-3\">" +
        "<span class=\"input-group-text\">Write here:</span>" +
        "<input type=\"text\" class=\"form-control\" id=\"posttext\">" +
        "</div>" +
        "<button type=\"button\" class=\"btn btn-primary\" onclick=\"newPostAjax();\">Create</button>";
}

function newPostAjax() {
    var name = document.getElementById("userDropDown").value;
    console.log(name);
    var description = document.getElementById("posttext").value;
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Added new post");
            createPost();
        }
    };
    xhr.open('POST', 'createPost');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + name + '&description=' + description + '&timestamp=' + timestamp);
}