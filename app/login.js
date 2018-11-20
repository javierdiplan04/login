$(document).ready(function(){
$("#login").click(function(){

login();

});
});

function login()
{
   // alert("Las contaseñas son diferentes2");
   var email = $("#email").val();
   var password = $("#password").val();

   var data = {
       email : email,
       password: password
   }

   console.log(data);
   
   fetch("http://68.183.27.173:8080/login", {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then((response)=>{
    var userdata=JSON.stringify(response);
    localStorage.setItem('Api',userdata);
    window.location.href="http://localhost/it247/halo/index.html";

  })
  //.then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}



/*
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

} */