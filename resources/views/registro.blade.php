@extends('layout')

@section('content')
    <div class="contenido">
        <div class="divContenidoDerecho">
            <h1>Datos Personales</h1><br>
            <form action="" id="formulario">
                <label for="nombre">Nombre</label>
                <p><input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre" required></p>
                <br><label for="email">Email</label>
                <p><input type="email" name="email" id="email" placeholder="Escribe tu email"  required ></p>
                <br><label for="telefono">Teléfono</label>
                <p><input type="tel" name="telefono" id="telefono" placeholder="Escribe tu teléfono" required></p>
                <br><h1>Datos de la Mascota</h1>
                <br><label for="nombre-mascota">Nombre</label>
                <p><input type="text" name="nombre-mascota" id="nombre-mascota" placeholder="Escribe el nombre de tu mascota" required></p>
                <br><label for="edad-mascota">Edad</label>
                <p><input type="number" name="edad-mascota" id="edad-mascota" placeholder="Escribe la edad de tu mascota"></p>
                <br><label for="peso-mascota">Peso</label>
                <p><input type="number" name="peso-mascota" id="peso-mascota" placeholder="Escribe el peso de tu mascota (en kg)"></p>
                <br><label for="tamanio-mascota">Tamaño:</label>
                <select name="tamanio-mascota" id="tamanio-mascota" required>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Chico">Chico</option>
                </select>
                <br>
                <br><label for="especie-mascota">Especie:</label>
                <select name="especie-mascota" id="especie-mascota" required>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                </select>
                <br><br><label for="raza-mascota">Raza</label>
                <p><input type="text" name="raza-mascota" id="raza-mascota" placeholder="Escribe la raza de tu mascota"></p>
                <br><label for="imagen-mascota">Imagen</label>
                <p><input type="text" name="imagen-mascota" id="imagen-mascota" placeholder="Introduce el url de una imagen de tu mascota" required></p>
                <br><label for="descripcion-mascota">Descripción</label>
                <br><p><textarea name="descripcion-mascota" id="descripcion-mascota" placeholder="Escribe una descripción de tu mascota"></textarea></p>
                <br><p class="sendButton"><button type="button" name="enviar" id="enviar">Enviar</button></p>
            </form>
        </div>
        <div class="contenedorImagen">
            <img src="{{ asset('img/registroImag.png') }}">
        </div>
    </div>
@endsection
