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
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		
  //$('#login ul li:eq(5)').hide(); // "eq" se refiere el elemento número 5
  
 /* $('#regSend').click(function(){
	alert("s");  
  });*/
		
		if(!isLogin())
			window.location.href = '#login';
	   $('#regSend').tap(function(){  // tab 2
	      if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!='' && $('#regFoto').attr('rel')!=undefined){
			  var nom = $('#regNom').val();
			  var tel = $('#regTel').val();
			  var mail = $('#regMail').val();
			  var foto = $('#regFoto').attr('rel');
			  enviarDatos(nom, tel, mail, foto);
			  //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");
		  }else{
			  navigator.notification.alert('Todos los campos son requeridos', null, "Hotel","Ok");
		  }
	   }); // tab 1
	   $('#regFoto').tap(function(){ // tab 2
		   tomarFoto();
	   }); // End Tab 2
	}, false);// End Event Listener
	/* "click" a diferencia de "tab" es que el tab es como si dieras el click antes de soltar el click.*/
});

/*
function loaddata(){
	
}*/

function isLogin(){
	
	if(window.localStorage.getItem('id') != undefined)
		return true;
	else
		return false;
}