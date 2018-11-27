
function post()
{
//   if(localStorage.getItem('Api')){



//    var datausuario = JSON.parse(localStorage.getItem('Api'));

//    fetch("http://68.183.27.173:8080/post", {
//     method: 'GET', // or 'PUT'
//     //body: JSON.stringify(data), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${datausuario.token}`

//     }
//   }).then(res => res.json())
//   .then((response)=>{
//     //var userdata=JSON.stringify(response);
//     //localStorage.setItem('Api',userdata);
//     //window.location.href="http://localhost/blogapi/post.html";
//     let obj=Object.keys(response).map(element=>{
// let {title}=response[element];
// //return `<h4>${title}</h4>`
// })

// document.getElementById("post").innerHTML=obj;
// console.log('Sussess',JSON.stringify(response));
//   })
//   //.then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));
// }

  console.log(" desde el metodo post");
  let url="http://68.183.27.173:8080/post";
  let {token}=JSON.parse(localStorage.getItem('Api'))
  console.log(token);
  
  fetch(url, 
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    }).then(res => res.json())
       .then((response)=>{
        
        //var userdata=JSON.stringify(response);
        //localStorage.setItem('Api',userdata);
         //window.location.href="http://localhost/blogapi/post.html";
         let obj=Object.keys(response).map(element=>{
     let {title,body,userName,userEmail}=response[element];
     //return `<h4>${title}</h4><br> <h4>${body}</h4> <br> <h4>${userName}</h4><br>`
     return `
     <table width="100%" border="0">
     <tbody>
       <tr>
         <td colspan="2" style="font-style: inherit; font-family: 'Corbel Bold', Corbel, 'Corbel Bold Italic', 'Corbel Italic';"><button type="button" class="btn btn-default">
         <span class="fas fa-star"></span>
       </button><strong>${title}</strong></td>
         <td><button type="button" class="btn btn-default">
         <span class="fas fa-share-alt-square"></span>
       </button></td>
         <td>&nbsp;</td>
       </tr>
       <tr>
         <td colspan="3">By: ${userName}<span style="font-style: oblique; color: #007FFF;"> ${userEmail}</span></td>
         <td>25 de Marzo, 2018</td>
       </tr>
       <tr>
         <td colspan="4">${body}</td>
       </tr>
       <tr>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td>&nbsp;</td>
         <td style="text-align: right"><button type="button" class="btn btn-default">
         <span class="far fa-star"></span>
       </button></td>
       </tr>
     </tbody>
   </table>`


     })
    
     document.getElementById("post").innerHTML=obj;
     console.log('Sussess',JSON.stringify(response));
       })
       //.then(response => console.log('Success:', JSON.stringify(response)))
       .catch(error => console.error('Error:', error));
     }

(function(){
post();
})();



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