
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
     let {title,body,userName,userEmail, views, likes, liked, comments,userId,id, tags, createdAt}=response[element];
     let fecha= new Date(createdAt).toLocaleDateString("es-RD");
     //return `<h4>${title}</h4><br> <h4>${body}</h4> <br> <h4>${userName}</h4><br>`
     /*return `
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
   </table>`*/

   return `<!--================Blog Area =================-->
   
   <div class="row">
                        <div class="blog_left_sidebar">
                       <article class="blog_style1">
                         <div class="blog_img">
                           <img class="img-fluid" src="img/home-blog/blog-1.jpg" alt="">
                         </div>
                         <div class="blog_text">
             <div class="blog_text_inner">
               <div class="cat">
                 <a class="cat_btn" href="#"><i class="fas fa-tag"></i> ${tags}</a>
                 <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> ${fecha}</a>
                 <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> <span id="articulo-comment-${id}"> ${comments}</a>
                 <a href="#"><i class="fas fa-eye" aria-hidden="true"></i> <span id="articulo-view-${id}"> ${views} </span></a>
                 <i class="fas fa-star" aria-hidden="true"></i> <span id="articulo-like-${id}">${likes} </span>
               </div>
               <a href="#"><h4>${title}</h4></a><a href="#"><h7>By ${userName} - ${userEmail}</h7></a>
               <p class="category"><a onclick="ShowUser(${userId});">By: ${userName} (${userEmail})</a></p>
               <br></br>
               <p>${body}</p>
               
               <button class="btn btn-small btn-link " onclick="Like(${liked},${id});">${(liked)?'<i class="fa fa-star"></i>':'<i class="fa fa-star-o"></i>'} </button>  ${likes} Me gustas
               <div id="ListadoComentario${id}"></div>
         
       </button>
       
             </div>

           </div>
                       </article>   
                       </div></div>
                       <br></br>
       
             
   <!--================Blog Area =================-->`


     })
    
     document.getElementById("post").innerHTML=obj;
     console.log('Sussess',JSON.stringify(response));
       })
       //.then(response => console.log('Success:', JSON.stringify(response)))
       .catch(error => console.error('Error:', error));
     }

(function(){
post();
//like();
wsConnect();
//comentarios();
})();


// Dar likes

//funcion para agregar y quitar like
function Like(like,id)
{ 
    var userdata=JSON.parse(localStorage.getItem('Api'));
      
     console.log(id,userdata);
    fetch(`http://68.183.27.173:8080/post/${id}/like`,{
        method: (like == true) ? 'DELETE': 'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${userdata.token}`

        }
    })
     .then((response)=>{
        GetlistPost();
     }).catch(error=>console.log("Error:",error));

}

// fin dar likes

//mostrar usuario

function  ShowUser(userId)
{   var URL =location.protocol + "//" +location.host; 
    localStorage.setItem('userId',userId);
    
     window.location.href=URL+"home/Users/javierdiplantavarez/Documents/ITLA/JavaScrip/tarea2/perfil.html";
    
}
//funcion para agregar y quitar like
function Like(like,id)
{ 
    var userdata=JSON.parse(localStorage.getItem('Api'));
      
     console.log(id,userdata);
    fetch(`http://68.183.27.173:8080/post/${id}/like`,{
        method: (like == true) ? 'DELETE': 'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${userdata.token}`

        }
    })
     .then((response)=>{
        GetlistPost();
     }).catch(error=>console.log("Error:",error));

 

}

//fin mostrar usuario




//comentarios

function GetlistComment(id)
{    
    
      if(localStorage.getItem('Api'))
        {   
             var userdata=JSON.parse(localStorage.getItem('Api'));
        
            fetch(`http://68.183.27.173:8080/post/${id}/comment`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+userdata.token

                }
            }).then(res=>res.json())
             .then((response)=>{
                console.log(response);
                $(`#ListadoComentario${idPost}`).html("");
               for(var i=0; i< response.length; i++)
               {
               var data=`  <hr>
               <div class="header">
               <small> <i class="fa fa-user"></i> <a onclick="ShowUser(${response[i].userId});" >By:${response[i].userName}</a></samll>  
               </div>
               <div class="content">
            <div class="form-group">
           <label>Comentario</label>
                                                <textarea rows="1" class="form-control border-input" placeholder="Here can be your description" value="Mike">
                                                ${response[i].body}
                                                </textarea>
                                            </div>
                  
               </div>`;
             $(`#ListadoComentario${idPost}`).prepend(data);
               }
            
                
             })
            .catch(error=>console.log("Error:",error));


        }

}

//fin comentario



// funcion websocket
function wsConnect() {

  let {token}=JSON.parse(localStorage.getItem('Api'))
    console.log("WS- connect ", token);
    var websocket = new WebSocket(`ws://68.183.27.173:8080/?token=${token}`);
    websocket.onopen = function (evt) {
        console.log(evt)
    };
    websocket.onclose = function (evt) {
        console.log(evt)
    };
    websocket.onerror = function (evt) {
        console.log(evt)
    };

    websocket.onmessage = function (evt) {
        var data = JSON.parse(evt.data);
        console.log(data);
        switch (data.type) {
            case "likes":
                $('#articulo-like-' + data.postId).text(data.likes);
                break;
            case "view-post":
                // TODO: cambias likes por views
                $('#articulo-view-' + data.postId).text(data.views);
                break;
            case "view-comment":
                // TODO: cambias likes por views
                $('#articulo-comment-' + data.postId).text(data.likes);
                break;

        }
    };
}


// fin funcion websocket




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