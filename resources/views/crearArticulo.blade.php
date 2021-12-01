@extends('layout')

@section('content')
    <div class="form-crear">
        <h2>Crear articulo</h2>
        <form action="" enctype="multipart/form-data" id="formulario">
            <input type="text" placeholder="Autor" autofocus name="autor" >
            <input type="text" placeholder="Titulo" name="titulo" >
            <input type="tel" placeholder="Año" name="anio" >
            <textarea name="resumen" rows="2" placeholder="Resumen"></textarea>
            <textarea placeholder="Contenido" name="contenido"  rows="10" ></textarea>
            <input type="file" name="imagen">
            <button type="button" id="enviar">Enviar</button>
        </form>
    </div>
@endsection
