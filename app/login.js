
function login()
{
   var username = $("#username").val();
   var password = $("#password").val();

   if("juan"===username && "palote"===password)
   {
      console.log("Autorized");
   }
   else
   {
     console.log("Bad Login");
   }
}

$(document).ready(function(){
$("#login").click(function(){
    login();
//alert("Hello World");

});

});

function formulario(){
//alert("Hola");

var nombre= document.getElementById("nombre").value;
var pas= document.getElementById("pas").value;
//var carrera= document.getElementById("carrera").value;
if(pas=="" || nombre=="")
{
        alert("Favor completar campos vacios");
}
else{
alert("Bienvenido "+nombre);
}

}