//Dispositivo
function infoDisp(){
	var arr = [];
	arr['nombre']=device.model;
	arr['phonegap']=device.cordova;
	arr['plataforma']=device.platform;
	arr['id']=device.uuid;
	arr['version']=device.version;

	return arr;

	/*
	 * var arr = [];
	 * var arr = new Array(); 
	 * 3 formas de declarar arreglos en JS
	*/
}