var path = window.location.pathname;
$(window).on('load', function() {
	if(sessionStorage.getItem(path) === null) {
		sessionStorage.setItem(path,$(this).scrollTop());
	} else {
		var jumpTo = parseInt(sessionStorage.getItem(path))
		$('#content').scrollTop(jumpTo);
	}
});

$(document).ready(function() {
	$('#content').scroll(function() {
		sessionStorage.setItem(path,$(this).scrollTop());
	});
});
