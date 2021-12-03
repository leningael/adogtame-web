@extends('layout')

@section('content')
    <div class="contenido">
        <div class="contenedorImagen">
            <img src="{{ asset('img/nosotros.png') }}">
        </div>
        <div class="divContenidoDerecho">
            <h1>Acerca de nosotros:</h1><br>
            <p>Adogtame es una organización no gubernamental y sin fines de lucro, que se enfoca
                principalmente en buscar un refugio a animales que tristemente sufren maltrato y desnutrición.
            </p><br>
            <h2>Misión:</h2>
            <p>Favorecer la aceleración de adopciones, buscando disminuir a los animalitos en situación de calle
                y facilitar las posibilidades de ingreso para nuevos rescatados.</p>
        </div>
    </div>
    <div class="pagebreak"> </div>
    <div class="divContenidoIzquierdo">
        <h1>¿Por qué adoptar?</h1><br>
        <p>Todos los animales necesitan una segunda oportunidad.
            Muchos han sido abandonados o se perdieron, por lo que,
            con la adopción, le estás dando una nueva vida en un hogar con protección
            y cariño. De hecho, al adoptar un animal, estás salvando no una, sino dos vidas,
            porque estás liberando espacio en un refugio o
            fundación para otro perrito o gatito necesitado.</p>
    </div>
@endsection
