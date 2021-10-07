/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function deleteUser() {

    console.log("in DeleteUser");

    var username = document.getElementById("userDropDown").value;
    console.log("delete user " + username);
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert("User " + username + " deleted");
            document.getElementById("page").innerHTML = "<!doctype html>\n" +
                "<html lang=\"en\" id=\"page\">\n" +
                "\n" +
                "<head>\n" +
                "    <!-- Required meta tags -->\n" +
                "    <meta charset=\"utf-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                "\n" +
                "    <!-- Bootstrap CSS -->\n" +
                "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1\" crossorigin=\"anonymous\">\n" +
                "\n" +
                "    <title>Form</title>\n" +
                "</head>\n" +
                "\n" +
                "<body>\n" +
                "    <nav class=\"navbar navbar-light bg-light px-4\">\n" +
                "        <div class=\"container-fluid\">\n" +
                "            <a class=\"navbar-brand\">Menu</a>\n" +
                "            <span class=\"navbar-text\">\n" +
                "                User Form\n" +
                "            </span>\n" +
                "            <div class=\"nav-item dropdown\">\n" +
                "                <button class=\"btn btn-secondary dropdown-toggle\" id=\"userDropDown\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
                "                  Guest\n" +
                "                </button>\n" +
                "                <ul class=\"dropdown-menu\" aria-labelledby=\"userDropDown\">\n" +
                "                    <li><button class=\"dropdown-item\" type=\"button\" onclick=\"signoutAjaxPOST();\">Sign Out</button></li>\n" +
                "                </ul>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </nav>\n" +
                "\n" +
                "    <div class=\"container mt-5 pt-4\">\n" +
                "        <div class=\"row justify-content-center\" id=\"containerRow\">\n" +
                "            <div class=\"col-5\">\n" +
                "                <div class=\"card text-center shadow p-3 mb-5 bg-white rounded border border-2\" id=\"cardelement\">\n" +
                "                    <div class=\"card-body\" id=\"test\">\n" +
                "                        <div class=\"row\">\n" +
                "                            <form>\n" +
                "                                <div class=\"form-floating mb-3\">\n" +
                "                                    <input type=\"text\" class=\"form-control\" id=\"loginUsername\" placeholder=\"Username\">\n" +
                "                                    <label for=\"floatingInput\">Username</label>\n" +
                "                                </div>\n" +
                "                                <div class=\"form-floating\">\n" +
                "                                    <input type=\"password\" class=\"form-control\" id=\"loginPassword\" placeholder=\"Password\">\n" +
                "                                    <label for=\"floatingPassword\">Password</label>\n" +
                "                                    <p class=\"mt-3 mb-0\" id=\"ShowInvalidLogin\"></p>\n" +
                "                                </div>\n" +
                "                            </form>\n" +
                "                        </div>\n" +
                "                        <div class=\"row py-4 px-2\">\n" +
                "                            <button type=\"submit\" class=\"btn btn-primary\" onclick=\"loginAjaxPOST();\">Log In</button>\n" +
                "                        </div>\n" +
                "                        <div class=\"row px-5\">\n" +
                "                            <button type=\"submit\" class=\"btn btn-success\" data-bs-toggle=\"modal\" data-bs-target=\"#staticBackdrop\">Register</button>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "    <!-- Modal -->\n" +
                "    <div class=\"modal fade\" id=\"staticBackdrop\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n" +
                "        <div class=\"modal-dialog modal-lg\">\n" +
                "            <div class=\"modal-content\">\n" +
                "                <div class=\"modal-header\">\n" +
                "                    <h5 class=\"modal-title\" id=\"staticBackdropLabel\">User Registration</h5>\n" +
                "                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n" +
                "                </div>\n" +
                "                <div class=\"modal-body\">\n" +
                "                    <form class=\"row g-3\">\n" +
                "                        <div class=\"col-6\">\n" +
                "                            <label for=\"usermail\" class=\"form-label\">Email</label>\n" +
                "                            <input type=\"email\" class=\"form-control\" id=\"usermail\" required>\n" +
                "                            <p id=\"showMailValid\"></p>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-6\">\n" +
                "                            <label for=\"username\" class=\"form-label\">Username</label>\n" +
                "                            <input onblur=\"checkUserName()\" type=\"text\" class=\"form-control\" id=\"username\" pattern=\".{8,}\" required>\n" +
                "                            <p id=\"showUserNameValid\"></p>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-6\">\n" +
                "                            <label for=\"password\" class=\"form-label\">Password</label>\n" +
                "                            <input type=\"password\" class=\"form-control\" id=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,10}$\" required>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-6\">\n" +
                "                            <label for=\"confirm_password\" class=\"form-label\">Confirm Password</label>\n" +
                "                            <input type=\"password\" class=\"form-control\" id=\"confirm_password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,10}$\" required>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-6\">\n" +
                "                            <label for=\"name\" class=\"form-label\">Name</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"name\" pattern=\"[a-zA-Z]{3,15}\" required>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-6\">\n" +
                "                            <label for=\"surname\" class=\"form-label\">Last Name</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"surname\" pattern=\"[a-zA-Z]{3,15}\" required>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-12\">\n" +
                "                            <label for=\"birthdate\" class=\"form-label\">Date of Birth</label>\n" +
                "                            <input type=\"date\" class=\"form-control\" id=\"birthdate\">\n" +
                "                        </div>\n" +
                "                        <div class=\"col-12\">\n" +
                "                            <label for=\"gender\" class=\"form-label\">Sex</label>\n" +
                "                            <br />\n" +
                "                            <input type=\"radio\" name=\"gender\" value=\"male\" /> Male<br />\n" +
                "                            <input type=\"radio\" name=\"gender\" value=\"female\" /> Female<br />\n" +
                "                            <input type=\"radio\" name=\"gender\" value=\"other\" /> N/A<br />\n" +
                "                        </div>\n" +
                "                        <div class=\"col-md-6\">\n" +
                "                            <label for=\"country\" class=\"form-label\">Country</label>\n" +
                "                            <select id=\"country\" class=\"form-select\">\n" +
                "                    <option selected>Greece</option>\n" +
                "                    <option>...</option>\n" +
                "                  </select>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-md-6\">\n" +
                "                            <label for=\"town\" class=\"form-label\">Town</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"town\" pattern=\".{3,20}\" required>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-md-12\">\n" +
                "                            <label for=\"address\" class=\"form-label\">Address</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"address\">\n" +
                "                        </div>\n" +
                "                        <div class=\"col-md-12\">\n" +
                "                            <label for=\"work\" class=\"form-label\">Work</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"work\" pattern=\".{3,20}\" required>\n" +
                "                        </div>\n" +
                "                        <div class=\"col-md-12\">\n" +
                "                            <label for=\"interests\" class=\"form-label\">Interests</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"interests\" placeholder=\"Enter your interests\" maxlength=\"100\">\n" +
                "                        </div>\n" +
                "                        <div class=\"col-md-12\">\n" +
                "                            <label for=\"general_info\" class=\"form-label\">General Info</label>\n" +
                "                            <input type=\"text\" class=\"form-control\" id=\"general_info\" placeholder=\"Enter general info about you\" maxlength=\"500\">\n" +
                "                        </div>\n" +
                "                        <div class=\"row mt-3 justify-content-center\">\n" +
                "                            <div class=\"col-12\">\n" +
                "                                <button type=\"submit\" class=\"btn btn-success\" onclick=\"registerAjaxPOST();\">Register User</button>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </form>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "    <!-- Option 1: Bootstrap Bundle with Popper -->\n" +
                "    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script>\n" +
                "    <script src=\"javascript/script.js\"></script>\n" +
                "    <script src=\"javascript/checkValidUserName.js\"></script>\n" +
                "    <script src=\"javascript/signout.js\"></script>\n" +
                "    <script src=\"javascript/getRegisteredUsers.js\"></script>\n" +
                "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n" +
                "    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js\"></script>\n" +
                "    <script src=\"javascript/checkValidEmail.js\"></script>\n" +
                "</body>\n" +
                "\n" +
                "</html>";

        }
    };
    xhr.open('POST', 'deleteUser');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('username=' + username);

}