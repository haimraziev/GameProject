$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
    });
	
	 $(".copyright").click(function () {
        $("#copyrightDiv").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
    });
	
	$(".closecopyright").click(function () {
        $("#copyrightDiv").hide();
    });
	
});