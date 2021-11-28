const API_URL = "http://localhost/crudapi/public";
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("enviar").addEventListener("click", function (){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/mascotas`, true);
        xhr.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                alert("¡La mascota se ha registrado!");
                document.getElementById("formulario").reset();
            }
        }

        var formData = new FormData(document.getElementById('formulario'));
        xhr.send(formData);
    });
});
/*document.addEventListener("DOMContentLoaded", function (){
    cargarLocalStorage();
    document.getElementById('enviar').onclick = function(){
        //Agarrando valores para el dueño
        const nombreDuenio = document.getElementById('nombre').value;
        const emailDuenio = document.getElementById('email').value;
        const telefonoDuenio = document.getElementById('telefono').value;

        //Agarrando valores para la mascota
        const nombre = document.getElementById('nombre-mascota').value;
        const edad = document.getElementById('edad-mascota').value;
        const peso = document.getElementById('peso-mascota').value;
        const tamanio = document.getElementById('tamanio-mascota').value;
        const especie = document.getElementById('especie-mascota').value;
        const raza = document.getElementById('raza-mascota').value;
        const imagen = document.getElementById('imagen-mascota').value;
        const descripcion = document.getElementById('descripcion-mascota').value;

        const duenio = new Duenio(nombreDuenio, emailDuenio, telefonoDuenio);
        const mascota = new Mascota(nombre, edad, peso, tamanio, especie, raza, imagen, descripcion, duenio);
        console.log(mascota);
        listaMascotas.push(mascota);
        guardarLocalStorage();
        window.location.reload(true);
    }
});

function Mascota(nombre, edad, peso, tamanio, especie, raza, imagen, descripcion, duenio){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.tamanio = tamanio;
    this.especie = especie;
    this.raza = raza;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.duenio = duenio;
}

function Duenio(nombre, email, telefono){
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
}

function guardarLocalStorage(){
    try {
        let mascotasString = JSON.stringify(listaMascotas);
        localStorage.setItem('listaMascotas', mascotasString);
    } catch (error) {
        console.log("Error al guardar en local storage \n" + error);
    }
}

function cargarLocalStorage(){
    let mascotasString = "";
    try {
        if(localStorage.getItem('listaMascotas')){
            mascotasString = localStorage.getItem('listaMascotas');
        }
    } catch (error) {
        console.log("Error al cargar el local storage \n" + error);
    }
    if(mascotasString){
        listaMascotas = JSON.parse(mascotasString);
    }
}

let listaMascotas = [];
*/
