// Dispositivo

function infoDisp(){
	
	var arr = [];
	
	arr['nombre']   = devide.model; //window.device.name;
	arr['phonegab'] = devide.cordova;
	arr['platform'] = devide.platform;
	arr['uuid']     = devide.uuid;
	arr['version']  = devide.version;
	//arr['model']    = devide.model;
	
	return arr;
	/*
	 * var arr = [];
	 * var arr = new Array(); 
	 * 3 formas de declarar arreglos en JS
	*/
}