const API_URL = "http://localhost/crudapi/public";
document.addEventListener("DOMContentLoaded", function (){
    var full_url = document.URL;
    var url_array = full_url.split('/');
    var id = url_array[url_array.length-1];
    if(id !== "registro"){
        editarMascota(id);
    }else{
        document.getElementById("enviar").addEventListener("click", function (){
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `${API_URL}/mascotas`, true);
            xhr.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200){
                    alert("¡Los datos de la mascota se han enviado con exito!");
                    document.getElementById("formulario").reset();
                }
            }

            var formData = new FormData(document.getElementById('formulario'));
            enviarForm(formData, xhr);
        });
        document.getElementById("enviarUsuario").addEventListener("click", function (){
            const xhrUsuario = new XMLHttpRequest();
            xhrUsuario.open("POST", `${API_URL}/usuarios`, true);
            xhrUsuario.onreadystatechange = function (){
                if(this.readyState === 4 && this.status === 200){
                    alert("¡Los datos del usuario se han enviado con exito!");
                    document.getElementById("formularioUsuario").reset();
                }
            }

            var formDataUsuario = new FormData(document.getElementById('formularioUsuario'));
            enviarForm(formDataUsuario, xhrUsuario);
        });
    }
});

editarMascota = function (id){
        const xhr1 = new XMLHttpRequest();
        function onRequestHandler() {
            if (this.readyState === 4 && this.status === 200) {
                let mascota = JSON.parse(this.response);
                llenarCampos(mascota);
            }
        }
        xhr1.addEventListener("load", onRequestHandler);
        xhr1.open("GET", `${API_URL}/mascotas/${id}`);
        xhr1.send();
}

llenarCampos = function (mascota){
    document.getElementById("nombre-usuario").value = mascota.NombreUsuario;
    document.getElementById("nombre-mascota").value = mascota.Nombre;
    document.getElementById("edad-mascota").value = mascota.Edad;
    document.getElementById("peso-mascota").value = mascota.Peso;
    document.getElementById("tamanio-mascota").value = mascota.Tamano;
    document.getElementById("especie-mascota").value = mascota.Especie;
    document.getElementById("raza-mascota").value = mascota.Raza;
    document.getElementById("descripcion-mascota").value = mascota.Descripcion;
    document.getElementById("enviar").addEventListener("click", function () {
        const xhr1 = new XMLHttpRequest();
        xhr1.open("POST", `${API_URL}/mascotas/${mascota.id}`, true);
        xhr1.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                window.location.href=`/proyecto-web/public/galeria#animal${mascota.id}`;
            }
        }

        var formData = new FormData(document.getElementById('formulario'));
        xhr1.send(formData);
    });
}

function enviarForm(formData, xhr){
    let iter = formData.entries();
    for(i of iter){
        if(typeof i[1] === 'string'){
            let element = document.createElement('div');
            element.innerText = i[1];
            formData.set(i[0],element.innerHTML);
        }
    }
    xhr.send(formData);
}
