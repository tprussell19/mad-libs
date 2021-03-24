$(document) .ready(function() {
  $("#formOne").submit(function(event) {
    const animalInput = $("input#animal").val();
    $(".animal").text(animalInput);
    $("#story").show();
    event.preventDefault();
  });
});

