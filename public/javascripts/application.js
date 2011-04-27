// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// We're gonna make the background image move with the mouse
// Let's choose a ratio between 0 and 1

var r = .1;
var x = -500;
var delay = 50;

var width = 1920;
var height = 1200;

function changeBgPos() {
  x++;
  $("body").css("background-position", x + "px -400px");
}

setInterval("changeBgPos()", delay);

$(document).ready(function() {
  setTimeout(function() {
    $("header").addClass('revealed');
  }, 500)
  setTimeout(function() {
    $("#bg-mask").addClass('blank');
  }, 1500)
  setTimeout(function() {
    $("#skills").addClass('revealed');
  }, 2500);
  setTimeout(function() {
    $("#contact").addClass('revealed');
  }, 4500);
})