$(document).ready(function() {
    $("form").click(function(){
        $.get("http://localhost:3000/admin", function(data,status) {
        let admin = data.find(function(user){
            user.email === email
        })
        var email = $("#email").val();
        var password = $("#password").val();
        if (email == admin.email && password == admin.password) {
                location.replace ("/index-admin.html");
        }
        } )
    })
})