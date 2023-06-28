


$("h1").addClass("big-title margin-50");

$("a").attr("href", "https://www.yahoo.com");

$("button").click(function() {
    $("h1").css("color", "blue");
    });

$(document).keypress(function(event) {
    var table = []
    table.push(event.key);
    $("h1").text(table);
});

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: Math.random()});
}
);