// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// We're gonna make the background image move with the mouse
// Let's choose a ratio between 0 and 1

var r = .1;
var x = -800;
var delay = 70;

var width = 1920;
var height = 1200;

function changeBgPos() {
  x++;
  $("body").css("background-position", x + "px -300px");
}

var init = setInterval("changeBgPos()", delay)



$(document).ready(function() {
  $.preloadCssImages();
  $("body").smartBackgroundImage("../images/bg.jpg");
  $("#bg-mask").fadeOut(1000);
})