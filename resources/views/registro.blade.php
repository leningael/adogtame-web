@extends('layout')

@section('content')
    <div class="contenido">
        <div class="divContenidoDerecho">
            <form action="" id="formulario" class="formulario" method="post" enctype="multipart/form-data">
                <br><h1>Datos de la Mascota</h1>
                <br><label for="nombreusuario">Nombre de usuario</label>
                <p><input type="text" name="nombreusuario" id="nombre-usuario" placeholder="Escribe el nombre de usuario" required></p>
                <br><label for="nombre">Nombre</label>
                <p><input type="text" name="nombre" id="nombre-mascota" placeholder="Escribe el nombre de tu mascota" required></p>
                <br><label for="edad">Edad</label>
                <p><input type="number" name="edad" id="edad-mascota" placeholder="Escribe la edad de tu mascota"></p>
                <br><label for="peso">Peso</label>
                <p><input type="number" name="peso" id="peso-mascota" placeholder="Escribe el peso de tu mascota (en kg)"></p>
                <br><label for="tamano">Tamaño:</label>
                <select name="tamano" id="tamanio-mascota" required>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Chico">Chico</option>
                </select>
                <br>
                <br><label for="especie">Especie:</label>
                <select name="especie" id="especie-mascota" required>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                </select>
                <br><br><label for="raza">Raza</label>
                <p><input type="text" name="raza" id="raza-mascota" placeholder="Escribe la raza de tu mascota"></p>
                <br><label for="imagen">Imagen</label>
                <p><input type="file" name="imagen" id="imagen-mascota"></p>
                <!--<p><input type="text" name="imagen" id="imagen-mascota" placeholder="Introduce el url de una imagen de tu mascota" required></p>-->
                <br><label for="descripcion">Descripción</label>
                <br><p><textarea name="descripcion" id="descripcion-mascota" placeholder="Escribe una descripción de tu mascota"></textarea></p>
                <br><p class="sendButton"><button type="button" id="enviar">Enviar</button></p>
            </form>
            <br><br><hr><br><br>
            <form action="" class="formulario" id="formularioUsuario">
                <h1>Datos Personales</h1><br>
                <label for="nombreusuario">Nombre de usuario</label>
                <p><input type="text" name="nombreusuario" id="username-usuario" placeholder="Escribe el nombre de usuario" required></p><br>
                <label for="nombre">Nombre</label>
                <p><input type="text" name="nombre" id="nombre-usuario" placeholder="Escribe tu nombre" required></p>
                <br><label for="email">Email</label>
                <p><input type="email" name="email" id="email-usuario" placeholder="Escribe tu email"  required ></p>
                <br><label for="telefono">Teléfono</label>
                <p><input type="tel" name="telefono" id="telefono-usuario" placeholder="Escribe tu teléfono" required></p>
                <br><label for="estado">Estado:</label>
                <select name="estado" id="estado-usuario" required>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="Campeche">Campeche</option>
                </select><br>
                <br><label for="municipio">Municipio</label>
                <p><input type="text" name="municipio" id="municipio-usuario" placeholder="Escribe tu municipio" required></p>
                <br><p class="sendButton"><button type="button" id="enviarUsuario">Enviar</button></p>
            </form>
            <a href="" id="btnRedirect"></a>
        </div>
        <div class="contenedorImagen">
            <img src="{{ asset('img/registroImag.png') }}">
        </div>
    </div>
    @endsection
