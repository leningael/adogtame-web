@extends('layout')

@section('content')
    <div class="form-crear">
        <h2>Crear articulo</h2>
        <form action="" enctype="multipart/form-data" id="formulario">
            <input type="text" placeholder="Autor" autofocus name="autor" required>
            <input type="text" placeholder="Titulo" name="titulo" required>
            <input type="tel" placeholder="Año" name="anio" required>
            <textarea name="resumen" rows="2" placeholder="Resumen"></textarea>
            <textarea placeholder="Contenido" name="contenido"  rows="10" required></textarea>
            <input type="file" name="imagen">
            <input type="submit" value="Enviar">
        </form>
    </div>
@endsection
