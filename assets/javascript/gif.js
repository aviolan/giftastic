$(document).ready(function() {

$("button").on("click", function() {
    var television = $(this).attr("data-television");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        television + "&api_key=zkxPeruCYUg4IV4nKPU6kFuYTVX7vsmL&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var televisionImage = $("<img>");
                televisionImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(televisionImage);

                $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });
});