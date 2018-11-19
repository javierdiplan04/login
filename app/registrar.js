$(document).ready(function(){
$("#registrarse").click(function(){
registrarse();

});
});


function registrarse()
{
   // alert("Las contaseñas son diferentes2");
   var nombre = $("#nombre").val();
   var username = $("#email").val();
   var password = $("#password").val();
   var password2 = $("#password2").val();

   if(password != password2)
   {
      alert("Las contaseñas son diferentes");
   }

   var data = {
       name : nombre,
       email: username,
       password: password
   }

   console.log(data);
   
   fetch("http://68.183.27.173:8080/register", {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}