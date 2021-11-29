@extends('layout')
<link rel="stylesheet" href=" {{ asset('css/galeria.css') }}">
@section('sidecontent')
    <div class="sidebar">
        <h1>Filtros</h1>
        <form action="" class="filtros">
            <input type="text" class="barra-busqueda" id="barra-busqueda" placeholder="Buscar">

            <p>Especies:</p>
            <div class="wrapperBtns">
                <div class="botones">
                    <input type="radio" name="especie" value="gato" id="gato">
                    <label for="gato">Gatos</label>
                </div>
                <div class="botones">
                    <input type="radio" name="especie" value="perro" id="perro">
                    <label for="perro">Perros</label>
                </div>
            </div>

            <p>Tamaños:</p>
            <div class="wrapperBtns">
                <div class="botones">
                    <input type="radio" name="tamano" value="chico" id="chico">
                    <label for="chico">Chicos</label>
                </div>
                <div class="botones">
                    <input type="radio" name="tamano" value="mediano" id="mediano">
                    <label for="mediano">Medianos</label>
                </div>
                <div class="botones">
                    <input type="radio" name="tamano" value="grande" id="grande">
                    <label for="grande">Grandes</label>
                </div>
            </div>
            <p class="btn"><button id="query-buscar">Buscar</button></p>
            <p class="btn"><button type="button" id="borrar">Borrar filtros</button></p>
        </form>
    </div>
@endsection

@section('content')
    <div class="grid" id="grid"></div>
    <div class="modal-container" id="modal-container">
        <div class="modal modal-close" id="modal">
            <p class="close" id="btnCerrar">X</p>
            <div id="contenidoMascota"></div>
        </div>
    </div>
@endsection
