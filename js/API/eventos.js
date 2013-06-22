// Eventos
/*$("document").ready(function(e) {
  alert("s");  
});; *//* jQuery() o $() es lo mismo
                * $("document") o $(document) es lo mismo*/

// $(function(e) donde la letra "e" es el evento que nos regresa la función
/*$(function(e) {
  //alert("s");
  // $('#login ul li:eq(1)').hide();
 //$('#regNom').hide(); // hide para ocultar el elemento, en este caso el nombre
});*/
//$(function(e) {
$(document).ready(function(e) {
  document.addEventListener("deviceready",function(){
  //$('#login ul li:eq(5)').hide(); // "eq" se refiere el elemento número 5
  
 /* $('#regSend').click(function(){
	alert("s");  
  });*/
  
  if(!isLogin()){
	  window.location.href = '#login';
  }
  
   $('#regSend').tap(function(){ // tap 1
	if($('#regNom').val() == '' || $('#regTel').val()== '' || 
	   $('#regMail').val()== '' || $('#regFoto').attr('rel')==undefined ){
		navigator.notification.alert('Todos los campos son requeridos',null,"Hotel", "Ok");
	}else{
		var nom  = $('#regNom').val();
		var tel  = $('#regTel').val();
		var mail = $('#regMail').val();
		var foto = $('#regFoto').attr('rel');
		
		//navigator.notification.alert(nom + '\n' + tel + '\n' + mail,null, "Hotel", "Aceptar");
		enviarDatos(nom,tel,mail.foto);
	}
  }); // tap 1
  $('#regFoto').tap(function(){ // tap 2
	  tomarFoto();
	}); // end tap 2
 }, false); // End Event Listener
  /* "click" a diferencia de "tab" es que el tab es como si dieras el click antes de soltar el click.*/
}); // end Document Ready
/*
function loaddata(){
	
}*/

function isLogin(){
	return false;	
}