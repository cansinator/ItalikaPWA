$(document).ready(function () {
  $('#datosError').hide();

  $(".passForgotten").on("click",function() {
    $("#part-1").hide();
    $("#part-2").fadeIn(1000);
  });

  $("#regresar").on("click",function() {
    $("#part-1").fadeIn();
    $("#part-2").hide(1000);
  });
});
