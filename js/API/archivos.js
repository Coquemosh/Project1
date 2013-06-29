// Archivos
function subirFoto(foto, nom){
	
	// http://docs.phonegap.com/en/2.8.0/cordova_file_file.md.html#FileTransfer
	var options = new FileUploadOptions();
	options.fileKey="archivo";
	options.fileName="Jorge";
	//options.mimeType="image/jpeg"; // No necesario, ese es el valor por default
	
	var ft = new FileTransfer();
	ft.upload(foto, "http://www.igitsoft.com/pgtest.php", 
	function(r){
			navigator.notification.confirm("Los datos han sido registrados satisfactoriamente",
			function(btn){
				//if(btn==1)
				switch(btn){
					case 1:
						navigator.notification.vibrate(1000);//vibra 1 segundo
						break;
					case 2:
						navigator.notification.beep(3); // suena 3 veces
						break;
					case 3: 
					    navigator.notification.alert(infoDisp()['nombre'],null, "Info","OK");
					/*	navigator.notification.alert('Nombre: '   + infoDisp()['nombre'] + '\n' +
						                             'Phonegab: ' + infoDisp()['phonegab'] + '\n' + 
													 'platform: ' + infoDisp()['platform'] + '\n' +
													 'uuid: '     + infoDisp()['uuid'] + '\n' + 
													 'version: '  + infoDisp()['version'] + '\n',
													 null, "Info","OK");*/
						
						break;
				}
				registro(nom);
				window.location.href="#page";
			}, "Registro","Vibrar,Sonar,Info,Cancelar");// con esto van a salir 3 botones.
		}, function(err){
				navigator.notification.alert("Error al subir el archivo" + err.code, null, "Registro", "Aceptar");
			}, options);
}



//<input type="file" name="arc"/> <!-- name sería el nombre que recibe el servidor -->