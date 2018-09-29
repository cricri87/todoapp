$(document).ready(function(){
  // $("h1").click(function(){
  //   $(this).css("color", "red");
  // });

  $("h1").on({
    mouseenter: function() {
      $(this).css("color", "green");
    },
    mouseleave: function() {
      $(this).css("color", "red");
    },
    click: function() {
      $(this).css("color", "blue")
    },
  });

  $("").mouseleave(function(){
      alert("Bye! You now leave p1!");
  });

  $("").mouseenter(function(){
    alert("You entered p1!");
  });

  $("#msg_success").click(function() {
    $(this).hide(2000);
  })
});
