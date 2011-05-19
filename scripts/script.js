window.addEventListener('DOMContentLoaded', function() {
	var frames = document.querySelectorAll('iframe'),
		query = window.location.search.substr(1);
	for(var i = 0, framesLenght = frames.length; i < framesLenght; i++) {
		frames[i].src = query;
	}
}, false);