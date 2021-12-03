@extends('layout')

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
    <div class="pagebreak"> </div>
    <hr>
    <section class="preview-blog" id="preview-blog"></section>
@endsection
