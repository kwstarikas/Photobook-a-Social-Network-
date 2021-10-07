/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function registerAjaxPOST() {
    var usermail = document.getElementById('usermail').value;
    var username = document.getElementById('username').value;
    var userpassword = document.getElementById('password').value;
    var firstname = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var birthdate = document.getElementById('birthdate').value;
    //var gender = document.getElementById('gender').value;
    var country = document.getElementById('country').value;
    var town = document.getElementById('town').value;
    var address = document.getElementById('address').value;
    var work = document.getElementById('work').value;
    var interests = document.getElementById('interests').value;
    var general_info = document.getElementById('general_info').value;

    //userpassword = (md5(userpassword));
    userpassword = (md5(username + userpassword + "!$"));
    console.log(userpassword);


    if (usermail === "" || username === "" || userpassword === "" ||
        firstname === "" || surname === "") {
        alert("Null value enter again credentials");
    } else {

        // we need to add code to match regex for the required values 
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("userDropDown").value = myObj.userName;
                document.getElementById("containerRow").innerHTML =
                    "<div class=\"col-10\">" +
                    "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                    "<div class=\"card-header\">" +
                    "  <ul class=\"nav nav-tabs\">" +
                    "    <li class=\"nav-item\">" +
                    "      <a class=\"nav-link active\">User Info</a>" +
                    "    </li>" +
                    "    <li class=\"nav-item\">" +
                    "      <a class=\"nav-link\">Update Info</a>" +
                    "    </li>" +
                    "    <li class=\"nav-item\">" +
                    "      <a class=\"nav-link\" onclick=\"getRegisteredUsersAjaxPOST();\">Registered users</a>" +
                    "    </li>" +
                    "  </ul>" +
                    "</div>" +
                    "<div class=\"card-body\" id=\"test\">" +
                    "    <p>\n" +
                    "            Username: " + myObj.userName + "<br>" +
                    "            Email: " + myObj.email + "<br>" +
                    "            Password " + myObj.password + "<br>" +
                    "            Name: " + myObj.firstName + "<br>" +
                    "            Surname: " + myObj.lastName + "<br>" +
                    "            BirthDate: " + myObj.birthDate + "<br>" +
                    "            Gender: " + myObj.gender + "<br>" +
                    "            Country: " + myObj.country + "<br>" +
                    "            Address: " + myObj.address + "<br>" +
                    "            Occupation: " + myObj.occupation + "<br>" +
                    "            Interests: " + myObj.interests + "<br>" +
                    "            Town: " + myObj.town + "<br>" +
                    "            Info: " + myObj.info + "<br>" +
                    "    </p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                document.getElementById("showPostsOf10Users").innerHTML =
                    "<div class=\"col-10\">" +
                    "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                    "<div class=\"card-header\">" +
                    "  <ul class=\"nav nav-tabs\">" +
                    "    <li class=\"nav-item\">" +
                    "      <a class=\"nav-link active\" onclick=\"get10Posts()\">TOP 10 Posts</a>" +
                    "    </li>" +
                    "    <li class=\"nav-item\">" +
                    "    <a class=\"nav-link active\" href=\"#\" onclick=\"createPost();\">New Post</a>" +
                    "    </li>" +
                    "    <li class=\"nav-item\">" +
                    "    <a class=\"nav-link active\" href=\"#\" onclick=\"getActiveSessions();\">Active Users</a>" +
                    "    </li>" +
                    "  </ul>" +
                    "</div>" +
                    "<div class=\"card-body\" id=\"newpostBody\">" +
                    "    <p id=\"show10RecentPostParagraph\">\n" +

                    "    </p>" +
                    "</div>";
                "</div>" +
                "</div>" +
                "</div>";
                document.getElementById("searchPost").innerHTML =
                    "<div class=\"col-10\">" +
                    "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                    "<div class=\"card-header\">" +
                    "  <ul class=\"nav nav-tabs\">" +
                    "<label>Search For post here </label> <br>" +
                    "<input id=\"searchforpost\"> <br>" +
                    "<div id=\"showscrollofautocomplete\"></div>" +
                    "<button onclick=\"searchPost()\">Search</button>" +
                    "  </ul>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                document.getElementById("DeleteCurrentUser").innerHTML =
                    "<div class=\"col-10\">" +
                    "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                    "<div class=\"card-header\">" +
                    "<input type=\"button\" onclick=\"deleteUser()\" value=\"Delete User\" ></input> <br>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
            } else if (this.status !== 200) {
                alert('Request failed. Returned status of ' + this.status);
            }
        };
        xhr.open('POST', 'registerServlet');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send('usermail=' + usermail +
            '&username=' + username +
            '&password=' + userpassword +
            '&firstname=' + firstname +
            '&surname=' + surname +
            '&birthdate=' + birthdate +
            '&country=' + country +
            '&town=' + town +
            '&address=' + address +
            '&work=' + work +
            '&interests=' + interests +
            '&general_info=' + general_info);
    }
}

function loginAjaxPOST() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var validInfo = document.getElementById("ShowInvalidLogin");

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            if (myObj !== null) {
                if (myObj.password === password) {
                    document.getElementById("userDropDown").value = myObj.userName;
                    document.getElementById("containerRow").innerHTML =
                        "<div class=\"col-10\">" +
                        "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                        "<div class=\"card-header\">" +
                        "  <ul class=\"nav nav-tabs\">" +
                        "    <li class=\"nav-item\">" +
                        "      <a class=\"nav-link active\" href=\"#\">User Info</a>" +
                        "    </li>" +
                        "    <li class=\"nav-item\">" +
                        "      <a class=\"nav-link\" href=\"#\">Update Info</a>" +
                        "    </li>" +
                        "    <li class=\"nav-item\">" +
                        "      <a class=\"nav-link\" href=\"#\" onclick=\"getRegisteredUsersAjaxPOST();\">Registered users</a>" +
                        "    </li>" +
                        "  </ul>" +
                        "</div>" +
                        "<div class=\"card-body\" id=\"test\">" +
                        "<ul>" +
                        "<li class=\"list-group-item\" id=\"listUsername\">Username: " + myObj.userName + "</li>" +
                        "<li class=\"list-group-item\">Email: " + myObj.email + "</li>" +
                        "<li class=\"list-group-item\">Password " + myObj.password + "</li>" +
                        "<li class=\"list-group-item\">Name: " + myObj.firstName + "</li>" +
                        "<li class=\"list-group-item\">Surname: " + myObj.lastName + "</li>" +
                        "<li class=\"list-group-item\">BirthDate: " + myObj.birthDate + "</li>" +
                        "<li class=\"list-group-item\">Gender: " + myObj.gender + "</li>" +
                        "<li class=\"list-group-item\">Country: " + myObj.country + "</li>" +
                        "<li class=\"list-group-item\">Address: " + myObj.address + "</li>" +
                        "<li class=\"list-group-item\">Occupation: " + myObj.occupation + "</li>" +
                        "<li class=\"list-group-item\">Interests: " + myObj.interests + "</li>" +
                        "<li class=\"list-group-item\">Town: " + myObj.town + "</li>" +
                        "<li class=\"list-group-item\">Info: " + myObj.info + "</li>" +
                        "</ul>" +
                        "</div>";
                    document.getElementById("showPostsOf10Users").innerHTML =
                        "<div class=\"col-10\">" +
                        "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                        "<div class=\"card-header\">" +
                        "  <ul class=\"nav nav-tabs\">" +
                        "    <li class=\"nav-item\">" +
                        "      <a class=\"nav-link active\" onclick=\"get10Posts()\">TOP 10 Posts</a>" +
                        "    </li>" +
                        "    <li class=\"nav-item\">" +
                        "    <a class=\"nav-link active\" href=\"#\" onclick=\"createPost();\">New Post</a>" +
                        "    </li>" +
                        "    <li class=\"nav-item\">" +
                        "    <a class=\"nav-link active\" href=\"#\" onclick=\"getActiveSessions();\">Active Users</a>" +
                        "    </li>" +
                        "  </ul>" +
                        "</div>" +
                        "<div class=\"card-body\" id=\"newpostBody\">" +
                        "    <p id=\"show10RecentPostParagraph\">\n" +

                        "    </p>" +
                        "</div>";
                    "</div>" +
                    "</div>" +
                    "</div>";

                    document.getElementById("searchPost").innerHTML =
                        "<div class=\"col-10\">" +
                        "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                        "<div class=\"card-header\">" +
                        "  <ul class=\"nav nav-tabs\">" +
                        "<label>Search For post here </label> <br>" +
                        "<input id=\"searchforpost\"> <br>" +
                        "<div id=\"showscrollofautocomplete\"></div>" +
                        "<button onclick=\"searchPost()\">Search</button>" +
                        "  </ul>" +
                        "</div>" +
                        "</div>" +
                        "</div>";
                    document.getElementById("DeleteCurrentUser").innerHTML =
                        "<div class=\"col-10\">" +
                        "<div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">" +
                        "<div class=\"card-header\">" +
                        "<input type=\"button\" onclick=\"deleteUser()\" value=\"Delete User\" ></input> <br>" +
                        "</div>" +
                        "</div>" +
                        "</div>";


                } else {
                    validInfo.innerHTML = "<span style='color:red;'>Wrong Password</span>";
                }
            } else {
                validInfo.innerHTML = "<span style='color:red;'>User doesn't exist</span>";
            }
        } else if (this.status !== 200) {
            alert('Request failed. Returned status of ' + this.status);
        }
    };

    xhr.open('POST', 'loginServlet');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + username);
}