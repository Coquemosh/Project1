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
	   /********************************Reservaciones********************************/
	   var nr1 = $('#nr1');
	   nr1.find('ul[data-role=listview] li').tap(function(){
		   if($(this).index()!=0){
				nr1.attr('th',$(this).index());
		   }
	   });
	   $('#sh').tap(function(){
		   if(nr1.attr('th')!=undefined && nr1.attr('th')!=''){
			   window.location.href = '#nr2';
		   }
	   });
	   $('#rh').tap(function(){
		   if(isConnected()){
			   alert('subir reserva');
		   		subirReserva(0, nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
		   }
			else{
				alert('guardar reserva');
				guardarReserva(nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
			}
	   });
	}, false);
});

function isLogin(){
	if(window.localStorage.getItem('id')!=undefined)
		return true;
	else
		return false;
}
