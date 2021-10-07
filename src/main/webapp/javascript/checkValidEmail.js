function checkValidRegisterEmail() {
    console.log("In check valid Email");

    var data = {
        Email: $("#usermail").val()
    };
    console.log(data.Email);
    $.ajax({
        type: "POST",
        url: "EmailCheckServlet",
        data: data,
        async: true,
        success: function(data) {
            console.log(data);

            if (data.trim() === "Valid") {
                var here = document.getElementById("showMailValid");
                here.innerHTML = "<span style='color: green;'>Valid Email</span>";
            } else {
                var here = document.getElementById("showMailValid");
                here.innerHTML = "<span style='color: red;'>Email already exists</span>";
            }
        },
        error: {
            400: function(data) {
                console.log("Error invalid Email");
            }
        }
    });
}