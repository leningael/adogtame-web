@extends('layout')
<link rel="stylesheet" href=" {{ asset('css/homepage.css') }}">
@section('content')
    <div class="carrusel-contenedor">
        <a href="{{ url('galeria') }}">
            <div class="carrusel-slides fade" id="carrusel1">
                <div class="texto-numero">1 / 3</div>
                <img src="{{ asset('img/carrusel1.jpg') }}" style="width: 100%;" alt="Imagen carrusel">
                <div class="carrusel-texto">GALERÍA</div>
            </div>
        </a>

        <a href="{{ url('nosotros') }}">
            <div class="carrusel-slides fade">
                <div class="texto-numero">2 / 3</div>
                <img src="{{ asset('img/carrusel2.jpg') }}" style="width: 100%;" alt="Imagen carrusel">
                <div class="carrusel-texto">CONÓCENOS</div>
            </div>
        </a>

        <a href="{{ url('registro') }}">
            <div class="carrusel-slides fade">
                <div class="texto-numero">3 / 3</div>
                <img src="{{ asset('img/carrusel3.jpg') }}" style="width: 100%;" alt="Imagen carrusel">
                <div class="carrusel-texto">REGISTRO</div>
            </div>
        </a>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <div style="text-align:center">
        <span class="puntos" onclick="currentSlide(1)"></span>
        <span class="puntos" onclick="currentSlide(2)"></span>
        <span class="puntos" onclick="currentSlide(3)"></span>
    </div>
    <section class="busqueda">
        <div class="formBusqueda">
            <span class="texto-info">Encuentra a tu nuevo mejor amigo</span>
            <form action="" id="formularioBuscar">
                <label for="tipoMascota">Busco:</label>
                <select name="tipoMascota" id="tipoMascota">
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                </select>
                <input type="submit" value="Comenzar b&uacute;squeda" class="boton">
            </form>
            <a href="" id="enviarTipo"></a>
        </div>
        <div class="imagen-busqueda">
            <img src="{{ asset('img/busqueda.png') }}" alt="Imagen con el tipo de mascotas">
        </div>
    </section>
    <hr>
    <section class="preview-blog">
        <a href="{{ url('blog#articulo1') }}">
            <article class="articulo">
                <img class="imagen-articulo" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc" alt="Imagen Articulo 2">
                <p class="titulo-articulo">¿Cómo interpretar a tu gatito?</p>
            </article>
        </a>
        <a href="{{ url('blog#articulo2') }}">
            <article class="articulo">
                <img class="imagen-articulo" src="http://static.ella-hoy.es/r/845X0/www.ella-hoy.es/img/perrogat.jpg" alt="Imagen Articulo 3">
                <p class="titulo-articulo">Aspectos a considerar antes de adoptar</p>
            </article>
        </a>
        <a href="{{ url('blog#articulo3') }}">
            <article class="articulo">
                <img class="imagen-articulo" src="https://perro.shop/wp-content/uploads/pug.jpg" alt="Imagen Articulo 1">
                <p class="titulo-articulo">10 consejos para cuidar a tu cachorro</p>
            </article>
        </a>
    </section>
@endsection
