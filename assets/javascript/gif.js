var topics = ["The Office", "Parks and Rec", "It's Always Sunny In Philadelphia", "Impractical Jokers"];

$(document).ready(function() {
    for (var i = 0; i < topics.length; i++) {
        $("#television-buttons").append("<button type='button' onclick='searchGif(\"" + topics[i] + "\")' class='btn btn-primary' value=' " + topics[i] + "'>" + topics[i] + "</button>");
    }
});

function tvButton () {
    var userInput = $("#television-input").val();
    searchGif(userInput);
}

function submitButtonClicked () {
    var userInput = $("#television-input").val();

    if (userInput) {
        $("#television-buttons").append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q= " + gifName + " &api_key=zkxPeruCYUg4IV4nKPU6kFuYTVX7vsmL",
        type: "GET",
    })
    .done(function(response) {
        displayGif(response);
    })
}

function displayGif(response) {
    $("#television").empty();
    for ( var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating: " + (response.data[i].rating) + "</div>";
        
    }
}