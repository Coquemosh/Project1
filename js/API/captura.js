// Captura
function tomarFoto(){ // http://docs.ponegap.com/en/2.8.0/cordova_media_capture_capture.md.html#capture.captureImage
	navigator.device.capture.captureImage( function(c){
		/*
		
		*/
		var cant = c.length;
		for(i=0;i<cant;i++){
			foto = c[i].fullPath;
		}
		
		// foto = c[0].fullPath; // 
		$('#regFoto').attr('rel',foto);
		$('#mFoto').html('<img src="' + foto + '" width="100%" />');
	}, function(err){
		 navigator.notification.alert("Error: " + err.code, null, "Captura","Aceptar");
		},{limit:2});	
}



























