const API_URL = "http://localhost/crudapi/public";
let articulos = [];

document.addEventListener("DOMContentLoaded", function (){
    const xhr = new XMLHttpRequest();
    function onRequestHandler(){
        if(this.readyState === 4 && this.status === 200){
            articulos = JSON.parse(this.response);
            desplegarArticulos();
        }
    }
    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}/articulos/recent_updates/3`);
    xhr.send();
    const form = document.getElementById('formularioBuscar');
    form.addEventListener("submit", function (event){
        event.preventDefault();
        const formData = new FormData(this);
        document.getElementById("enviarTipo").setAttribute('href', `/proyecto-web/public/galeria/${formData.get('tipoMascota')}`)
        document.getElementById("enviarTipo").click();
    });
});

desplegarArticulos = function (){
    var contenido = "";
    articulos.forEach(articulo =>{
        contenido+=`<a href="/proyecto-web/public/blog#articulo${articulo["id"]}">`;
        contenido+="<article class='articulo'>";
        contenido+=`<img class="imagen-articulo" src="${API_URL}${articulo["Imagen"]}">`;
        contenido+=`<p class="titulo-articulo">${articulo["Titulo"]}</p></article></a>`;
    });
    document.getElementById("preview-blog").innerHTML=contenido;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carrusel-slides");
    var dots = document.getElementsByClassName("puntos");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /*slideIndex++;*/
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
