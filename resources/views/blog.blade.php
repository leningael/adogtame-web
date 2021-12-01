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
    <section class="lista-articulos">
        <article class="articulo-blog" id="articulo1">
            <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc" alt="">
            <div class="info-articulo">
                <h3>¿Cómo interpretar a tu gatito?</h3>
                <p>En cuanto entiendas los aspectos básicos del comportamiento de tu gato, podrás interpretar rápidamente cómo se siente. Si estás intentando entender el comportamiento de tu gato, ¡nuestra guía te explicará todo lo que necesitas saber para hablar el idioma de los gatos!</p>
                <button type="button" class="btnArticulos">Leer articulo</button>
            </div>
        </article>
        <article class="articulo-blog" id="articulo2">
            <img src="http://static.ella-hoy.es/r/845X0/www.ella-hoy.es/img/perrogat.jpg" alt="">
            <div class="info-articulo">
                <h3>Aspectos a considerar antes de adoptar</h3>
                <p>Estás pensando en adoptar una mascota? Estos son algunos de los aspectos que debes de considerar antes de dar el paso.</p>
                <button type="button" class="btnArticulos">Leer articulo</button>
            </div>
        </article>
        <article class="articulo-blog" id="articulo3">
            <img src="https://perro.shop/wp-content/uploads/pug.jpg" alt="">
            <div class="info-articulo">
                <h3>10 consejos para cuidar a tu cachorro</h3>
                <p>Un perro nunca se cansará de recibir amor. Háblale, apapáchalo, comparte tus secretos con él y ¡cuídalo! Tu mejor amigo necesita varias cosas. Aquí te compartimos algunos consejos para cuidar a tu perro:</p>
                <button type="button" class="btnArticulos">Leer articulo</button>
            </div>
        </article>
    </section>
@endsection
