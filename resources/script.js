// $('#list1').hide();
$(document).ready(function() {
    $.ajax({
        
    })

    $("#bt1").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/admin',
            success: function(data) {
                for(var i=0; i<data.length; i++) {
                    if (email === data[i].email && password === data[i].password) {
                        window.location.href="index-admin.html";
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
    $("form[name=update]").submit(function(e){
        var city = $("#city").val();
        var hName = $("#hotel-name").val();
        var hLocation = $("#hotel-address").val();
        var hPrice = $("#price").val();
        var nRooms = $("#nrooms").val();
        var hotelInfo = $("#hotel-amenities").val();
        var description = $("#hotel-desc").val();
        var hdata = {
            "name": hName,
            "location": hLocation,
            "price": hPrice,
            "n-rooms":nRooms,
            "hotel-info": hotelInfo,
            "description": description
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/"+city+"-hotels",
            data: hdata,
            success: function(data) {
                alert("Hotel created");

            }
        })
        e.preventDefault();
    })
})