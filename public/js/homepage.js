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

document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById('formularioBuscar');
    form.addEventListener("submit", function (event){
        event.preventDefault();
        const formData = new FormData(this);
        document.getElementById("enviarTipo").setAttribute('href', `/proyecto-web/public/galeria/${formData.get('tipoMascota')}`)
        document.getElementById("enviarTipo").click();
    });
    /*var sendForm = function (event) {
        event.preventDefault();

        document.querySelector('#correo').setAttribute('href',`mailto:adogtame@gmail.com?subject=${formData.get('asunto')} - ${formData.get('nombre')}&body=${formData.get('mensaje')}`);
        document.querySelector('#correo').click();
    }

    form.addEventListener('submit', sendForm);*/
});
