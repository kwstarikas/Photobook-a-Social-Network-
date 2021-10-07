function checkUserName() {
    console.log("in checkUserName");
    var data = {
        Username: $("#username").val()
    };
    $.ajax({
        type: "POST",
        url: "UsernameCheckServlet",
        data: data,
        async: true,
        success: function(data) {
            console.log(data);
            if (data.trim() == "Valid") {
                var here = document.getElementById("showUserNameValid");
                here.innerHTML = "<span style='color: green;'>Valid Username</span>";
                console.log("is valid");
            } else {
                var here = document.getElementById("showUserNameValid");
                here.innerHTML = "<span style='color: red;'>Username already exists</span>";
                console.log("is NOT valid");
            }
        },
        error: {
            400: function(data) {
                console.log("Error invalid Username");
            }
        }
    });

}

function checkLoginUsernName() {
    console.log("in CheckLogin");
    var data = {
        Username: $("#loginUsername").val(),
        Password: $("#userpassword").val()
    }

    $.ajax({
        type: "POST",
        url: "UserLogin",
        data: data,
        asyc: true,
        success: function(data) {
            if (data.trim() == "Valid") {
                var here = document.getElementById("showloginContent");
                //to do write the page
                here.innerHTML = "<span style='color: green;'>Valid Username</span>";
                console.log("is valid");
            } else if (data.trim() == "WrongUname") {
                var here = document.getElementById("showloginContent");
                here.innerHTML = "<span style='color: red;'>Invalid Username</span>";
                console.log("is NOT valid");
            } else {
                var here = document.getElementById("showloginContent");
                here.innerHTML = "<span style='color: red;'>Invalid Password</span>";
                console.log("is NOT valid");
            }
        },
        error: {
            400: function(data) {
                console.log("Error with login");
            }
        }
    });
}