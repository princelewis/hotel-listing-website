// $('#list1').hide();
$(document).ready(function() {
    $(".hide").hide();
    $.ajax({
        type:'GET',
        url: 'http://localhost:3000/hotels',
        success: function(data){
            showAllHotels(data);
        }
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
                        // location.reload();
                        $("#addbtn").show();
                        $("#del").show();
                        // $("#popUp").hide();
                        // window.location.href="index-admin.html";
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
        var city = $("#citya").val();
        var hName = $("#hotel-name").val();
        var hLocation = $("#hotel-address").val();
        var hPrice = $("#price").val();
        var nRooms = $("#nrooms").val();
        var hotelInfo = $("#hotel-amenities").val();
        var description = $("#hotel-desc").val();
        var hdata = {
            "city": city,
            "name": hName,
            "location": hLocation,
            "price": hPrice,
            "n-rooms":nRooms,
            "hotel-info": hotelInfo,
            "description": description
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/"+"hotels",
            data: hdata,
            success: function(data) {
                alert("Hotel created");
                // window.location.reload();

            }
        })
        e.preventDefault();
    })
});

function showAllHotels(data){
    var container = $(".hotel-container");
    if(data.length != 0){
        var hotelChild = $(".hotel-child");
        data.forEach(function(hotel){
            var newHotel = hotelChild.clone();
            newHotel.removeClass("hide");
            newHotel.removeClass("hotel-child");
            var hotelId = hotel["id"];
            var imgUrl = "resources/images/hotel-"+hotelId+".jpg"
            newHotel.find(".hotl-img").attr("src", imgUrl);
            newHotel.find(".hotl-name").text(hotel["name"]+" - ");
            newHotel.find(".hotl-city").text(hotel["city"]);
            var hotelPrice = hotel["price"];
            hotelPrice = hotelPrice.split("-")[1];
            newHotel.find(".hotl-price").text("₦"+hotelPrice);
            newHotel.find(".hotl-address").text(hotel["location"]);
            var viewButton = newHotel.find(".view-hotel");
            viewButton.click(function(hotel){
                displayHotelDetails();
            });
            newHotel.appendTo(container).show();
        });
    }
}

function displayHotelDetails(hotel){
    alert("Details");
}