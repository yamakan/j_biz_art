// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function(){

//jQuery(document).ready(function(){


/*
$("div.main").live("mouseover",function(){
	$(this).css({
		"backgroundColor": "rgb(220,139,59)",
		"color":"#FFFFFF"
	});
	
}).live("mouseout",function(){
	$(this).css({
		"backgroundColor": "rgb(251,251,251)",
		"color": "rgb(128,128,128)"
	});
});
*/

$(".art1_description").css("opacity","1").hide();
//$("div.art1_description_wrap").css("opacity","0.9").hide();

$(".row1_column1").hover(function(){
	$(".art1_description:not(:animated)").fadeIn("slow");
	},function(){
		$(".art1_description").fadeOut("slow");
	});


});




