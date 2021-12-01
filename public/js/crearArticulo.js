const API_URL = "http://localhost/crudapi/public";
const xhr = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("enviar").addEventListener("click", function (){
        xhr.open("POST", `${API_URL}/articulos`, true);
        xhr.onreadystatechange = function (){
            if(this.readyState === 4 && this.status === 200){
                alert("¡Tu articulo se ha registrado con exito!");
                document.getElementById("formulario").reset();
            }
        }
        let formData = new FormData(document.getElementById('formulario'));
        enviarForm(formData);
    });
});

function enviarForm(formData){
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
