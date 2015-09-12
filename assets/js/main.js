//$("#frmContact").submit(function(){
//	var data = "";
//	$.post(this.attr("action", data, function(response){
//		//
//	});
//});
$(function(){
	var i=1;
	var t=1;
	function changeBck(){
		if(t==6){
			if(i==4){
				i=1;
			}
			var imgUrl = 'assets/pictures/img' + i + '.jpg';
			$("header").css('background-image', 'url(' + imgUrl + ')');
			i++;
			t=1;
		}
		t++;
	}

	setInterval(changeBck,1000);
});
