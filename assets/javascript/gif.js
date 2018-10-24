//Topics array. I chose comedy shows
var topics = ["The Office", "Parks and Rec", "Its Always Sunny In Philadelphia", "Impractical Jokers"];

//Dynamically creates buttons onto html page
$(document).ready(function() {
    for (var i = 0; i < topics.length; i++) {
        $("#television-buttons").append("<button type='button' onclick='searchGif(\"" + topics[i] + "\")' class='btn btn-primary' value=' " + topics[i] + "'>" + topics[i] + "</button>");
    }
});

//Creates tv button after user types in search box
function tvButton () {
    var userInput = $("#television-input").val();
    searchGif(userInput);
}

//Appends the users input after they type in a tv show
function submitButtonClicked () {
    var userInput = $("#television-input").val();

    if (userInput) {
        $("#television-buttons").append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

//Searchs for gifs using the AJAX and GET method. Includes my API Key
function searchGif(gifName) {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q= " + gifName + " &api_key=zkxPeruCYUg4IV4nKPU6kFuYTVX7vsmL",
        type: "GET",
    })
    .done(function(response) {
        displayGif(response);
    })
}

//Appends the image of each tv show gif to the html page
function displayGif(response) {
    $("#television").empty();
    for ( var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating: " + (response.data[i].rating) + "</div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
        ' " data-still=" ' + response.data[i].images.fixed_height_still.url +
        ' " data-animate=" ' + response.data[i].images.fixed_height.url + ' " data-state="still" class="movImage" style="width: 300px; height: 300px">';
        
        $('#television').append(image);
    }

    //Allows the user to click the gif to stop and play
    $(".movImage").on("click", function () {
        var state = $(this).attr("data-state");
        if (state == "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
}