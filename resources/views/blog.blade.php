@extends('layout')

@section('content')
    <div class="contenedorImagen">
        <p class="textoImagen">Bienvenido al blog</p>
        <img src="{{ asset('img/perroLector.jpeg') }}">
    </div>
    <div class="divForm">
        <h1>¡Crea tu propio articulo para el blog!</h1>
        <a href="{{ url('crearArticulo') }}" class="crearArticulo" id="crearArticulo">Crear el tuyo</a>
    </div>
    <section class="lista-articulos" id="lista-articulos"></section>
    <div class="modal-container" id="modal-container">
        <div class="modal modal-close" id="modal">
            <p class="close" id="btnCerrar">X</p>
            <div id="detallesArticulo"></div>
        </div>
    </div>
@endsection
