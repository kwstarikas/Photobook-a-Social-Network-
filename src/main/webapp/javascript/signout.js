/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function signoutAjaxPOST() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("page").innerHTML = this.responseText;
            console.log("Site Redrawn");
        }
    };
    xhr.open('POST', 'signoutServlet');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}


