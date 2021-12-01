const API_URL = "http://localhost/crudapi/public";

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("enviar").addEventListener("click", function (){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/articulos`, true);
        xhr.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                alert("¡Tu ariculo se ha registrado con exito!");
                document.getElementById("formulario").reset();
            }
        }
        var formData = new FormData(document.getElementById('formulario'));
        xhr.send(formData);
    });
});
