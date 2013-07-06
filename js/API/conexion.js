// Conexion

function isConnected(){
	
	// http://docs.phonegap.com/en/2.8.0/cordova_connection_connection.md.html#Connection
	//alert('isConnected');
	if(navigator.connection.type!=Connection.NONE){
		return true;
	}
	else{
		return false;
	}
}