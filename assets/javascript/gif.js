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

