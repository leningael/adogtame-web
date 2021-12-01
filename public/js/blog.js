const API_URL = "http://localhost/crudapi/public";
let articulos = [];
document.addEventListener("DOMContentLoaded", function (){
    let modal = document.getElementById("modal");
    let modalC = document.getElementById("modal-container");
    const xhr = new XMLHttpRequest();
    function onRequestHandler(){
        if(this.readyState === 4 && this.status === 200){
            articulos = JSON.parse(this.response);
            desplegarArticulos();
            desplegarModal(modal, modalC);
        }
    }
    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}/articulos/recent_updates`, false);
    xhr.send();
    btnCerrarModal(modal, modalC);
    cerrarModalFuera(modal, modalC);
});

btnCerrarModal = function (modal, modalC){
    let cerrar = document.getElementById("btnCerrar");
    cerrar.addEventListener("click", function (){
        modal.classList.toggle("modal-close");
        setTimeout(function (){
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        }, 900);
        document.getElementById("detallesArticulo").innerHTML=``;
    });
}

cerrarModalFuera = function (modal, modalC){
    window.addEventListener("click", function (e){
        if(e.target === modalC){
            modal.classList.toggle("modal-close");
            setTimeout(function (){
                modalC.style.opacity="0";
                modalC.style.visibility="hidden";
            }, 600);
        }
    });
}

desplegarArticulos = function (){
    var contenido = "";
    articulos.forEach(articulo =>{
        contenido+=`<article class="articulo-blog" id="articulo${articulo["id"]}">`;
        contenido+=`<img class="imgBlog" src="${API_URL}${articulo["Imagen"]}">`;
        contenido+="<div class=\"info-articulo\">";
        contenido+=`<h3>${articulo["Titulo"]}</h3>`;
        contenido+=`<p>${articulo["Resumen"]}</p><div class="opcionesArticulo">`;
        contenido+=`<button type="button" class="btnArticulos" id="leer.${articulo["id"]}">Leer articulo</button>`;
        contenido+=`<button class="btnBorrar" id="${articulo["id"]}"><img src="/proyecto-web/public/img/borrar.png"></button></div>`
        contenido+="</div></article>";
    });
    document.getElementById("lista-articulos").innerHTML=contenido;
    btnsBorrarArticulo();
}

btnsBorrarArticulo = function (){
    const btnsBorrar = document.querySelectorAll(".btnBorrar");
    for(let i = 0; i < btnsBorrar.length; i++){
        btnsBorrar[i].addEventListener("click", function (){
            var elem = document.getElementById(`articulo${this.id}`);
            articulos.splice(this.id, 1);
            const xhr1 = new XMLHttpRequest();
            function onDeleteHandler(){
                if(this.readyState === 4 && this.status === 200){
                    elem.parentNode.removeChild(elem);
                }
            }
            xhr1.addEventListener("load", onDeleteHandler);
            xhr1.open("DELETE", `${API_URL}/articulos/${this.id}`);
            xhr1.send();
        });
    }
}

desplegarModal = function (modal, modalC, detallesArticulo){
    const btnArticulos = document.querySelectorAll(".btnArticulos");
    for(let i = 0; i < btnArticulos.length; i++){
        btnArticulos[i].addEventListener("click", function (e){
            e.preventDefault();
            modalC.style.opacity="1";
            modalC.style.visibility="visible";
            modal.classList.toggle("modal-close");
            var idDetalles = this.id.split(".");
            var articulo = articulos.filter(function (articulo){
                return articulo.id==idDetalles[1];
            });
            var detalles = "";
            detalles+="<div class='informacionArticulo'>";
            detalles+=`<h1>${articulo[0].Titulo}</h1>`;
            detalles+=`<p><b>Autor:</b> ${articulo[0].Autor}</p>`;
            detalles+=`<p><b>Año:</b> ${articulo[0].Anio}</p></div>`;
            detalles+=`<p class="contenidoArticulo">${articulo[0].Contenido}</p>`;
            document.getElementById("detallesArticulo").innerHTML=detalles;
        });
    }
}
