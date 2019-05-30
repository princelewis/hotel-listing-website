$(document).ready(function() {
    $("#bt1").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/admin',
            success: function(data) {
                for(var i=0; i<data.length; i++) {
                    if (email === data[i].email && password === data[i].password) {
                        window.location.replace("hotel-listing-website/index-admin.html");
                        break;
                    }
                    else if (email !== data[i].email && password === data[i].password) {
                        alert("wrong email");
                        break;
                    }
                    else if (email === data[i].email && password !== data[i].password) {
                        alert("wrong password");
                        break;
                    }
                    else {
                        alert("wrong details");
                        break;
                    }
                }
            }
        })
    })
})