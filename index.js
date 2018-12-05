

function titleAlert() {
	var r = 'мигающая херня';
	var t = document.title;
	
	if(!$("div").is("#saved-title")) {
		$("body").append('
' + t + '
');
	}
	var st = $("#saved-title").text();
	
	if(t != r) {
		document.title = r;
	}
	else {
		document.title = st;
	}
}
