@extends('layout')
<link rel="stylesheet" href=" {{ asset('css/contacto.css') }}">
@section('content')
    <div class="contenido">
        <div class="contenedorImagen">
            <img src="{{ asset('img/contactoImag.png') }}">
        </div>
        <div class="divContenidoDerecho">
            <h1>Contacto</h1><br>
            <form action="" id="formulario">
                <label for="nombre">Nombre</label>
                <p><input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre" required></p>
                <br><label for="email">Email</label>
                <p><input type="email" name="email" id="email" placeholder="Escribe tu Email"  required ></p>
                <br><label for="asunto">Asunto</label>
                <p><input type="text" name="asunto" id="asunto" placeholder="Escribe un asunto" required></p>
                <br><label for="mensaje">Mensaje</label>
                <br><p><textarea name="mensaje" id="mensaje" placeholder="Escribe un mensaje"></textarea></p>
                <br><p class="sendButton"><button type="submit" name="enviar" id="enviar">Enviar</button></p>
            </form>
            <a href="mailto: adogtame@gmail.com" id="correo">email</a>
        </div>
    </div>
@endsection
