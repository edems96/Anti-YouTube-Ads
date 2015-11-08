$(document).ready(function() {
	$("video.html5-main-video").on("play", function() {
		console.log("changed: ");
	});
	
	if( $("div.ad-showing").length ) {
		location.reload();
	}
	else
		console.log("no ads");
});