$(document).ready(function() {
  $("button#dog").click(function(){
    $("ul#woof").prepend("<li>Woooof!</li>");
  });
  $("button#cat").click(function(){
    $("ul#meow").append("<li>Meoowww!</li>");
  });
});

// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul#user").prepend("<li>Hello!</li>");
//     $("ul#webpage").prepend("<li>Why hello there!</li>");
//   });
//
//   $("button#goodbye").click(function() {
//     $("ul#user").prepend("<li>Goodbye!</li>");
//     $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//   });
//
//   $("button#stop").click(function() {
//     $("ul#user").prepend("<li>Stop copying me!</li>");
//     $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//   });
// });
