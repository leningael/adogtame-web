const API_URL = "http://localhost/crudapi/public";

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("enviar").addEventListener("click", function (){
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${API_URL}/articulos`, true);
        xhr.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                alert("¡Tu articulo se ha registrado con exito!");
                document.getElementById("formulario").reset();
            }
        }
        let formData = new FormData(document.getElementById('formulario'));
        enviarForm(formData, xhr);
    });
});

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
