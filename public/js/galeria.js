const API_URL = "http://localhost/crudapi/public";
let petsList = [];
document.addEventListener("DOMContentLoaded", function (){
    let modal = document.getElementById("modal");
    let contenidoMascota = document.getElementById("contenidoMascota");
    let modalC = document.getElementById("modal-container");
    const principalGrid = document.getElementById("grid");
    const radioEls = document.querySelectorAll('input[type="radio"]');
    const btnBuscar = document.getElementById("query-buscar");
    const btnBorrar = document.getElementById("borrar");
    const xhr = new XMLHttpRequest();
    function onRequestHandler(){
        if(this.readyState === 4 && this.status === 200){
            petsList = JSON.parse(this.response);
            addAnimals(principalGrid);
            const grid = new Muuri('.grid', {
                layout: {
                    rounding: false
                }
            });
            cargarParametros(grid);
            grid.refreshItems().layout();
            document.getElementById("grid").classList.add('imagenes-cargadas');
            btnBuscar.addEventListener('click', (evento)=>{
                let query = "";
                evento.preventDefault();
                radioEls.forEach((elemento)=>{
                    if(elemento.checked){
                        query += `${elemento.value} `;
                    }
                });
                grid.filter((item)=> item.getElement().dataset.etiquetas.includes(query.toLowerCase()));
                grid.refreshItems().layout();
            });
            btnBorrar.addEventListener('click', (evento)=>{
                evento.preventDefault();
                grid.filter((item)=> item.getElement().dataset.etiquetas.includes(''));
                radioEls.forEach((elemento)=>{
                    if(elemento.checked){
                        elemento.checked = false;
                    }
                });
                grid.refreshItems().layout();
            });
            //Filtrado por barra de busqueda
            document.querySelector('#barra-busqueda').addEventListener('input', (evento)=>{
                const busqueda = evento.target.value;
                grid.filter((item)=> item.getElement().dataset.nombres.includes(busqueda.toLowerCase()));
                grid.refreshItems().layout();
            })
            grid.refreshItems().layout();

            const btnsBorrar = document.querySelectorAll(".btnBorrar");
            for(let i = 0; i < btnsBorrar.length; i++){
                btnsBorrar[i].addEventListener("click", function (){
                    var elem = document.getElementById(`animal${this.id}`);
                    petsList.splice(this.id, 1);
                    const xhr1 = new XMLHttpRequest();
                    function onDeleteHandler(){
                        if(this.readyState === 4 && this.status === 200){
                            //console.log(this.response);
                            elem.parentNode.removeChild(elem);
                            grid.refreshItems().layout();
                        }
                    }
                    xhr1.addEventListener("load", onDeleteHandler);
                    xhr1.open("DELETE", `${API_URL}/mascotas/${this.id}`);
                    xhr1.send();
                });
            }
            const detallesMascotas = document.querySelectorAll(".img-mascota");
            for(let i = 0; i < detallesMascotas.length; i++){
                detallesMascotas[i].addEventListener("click", function (e){
                    e.preventDefault();
                    modalC.style.opacity="1";
                    modalC.style.visibility="visible";
                    modal.classList.toggle("modal-close");
                    var idDetalles = this.id.split(".");
                    //console.log(idDetalles[1])
                    var mascota = petsList.filter(function (mascota){
                        return mascota.id==idDetalles[1];
                    });
                    const xhrUsuario = new XMLHttpRequest();
                    function onRequestHandlerUser(){
                        if(this.readyState === 4 && this.status === 200){
                            let usuario = JSON.parse(this.response);
                            var contenido = "";
                            contenido+=`<div class="detallesCompletos"><div class="infoCompleta"><h2>Detalles de ${mascota[0].Nombre}</h2>`;
                            contenido+=`<p>Edad: ${mascota[0].Edad}</p>`;
                            contenido+=`<p>Peso: ${mascota[0].Peso}</p>`;
                            contenido+=`<p>Tamaño: ${mascota[0].Tamano}</p>`;
                            contenido+=`<p>Especie: ${mascota[0].Especie}</p>`;
                            contenido+=`<p>Raza: ${mascota[0].Raza}</p><br>`;
                            contenido+=`<b>Detalles del contacto</b>`;
                            if(typeof(usuario.NombreUsuario) == "undefined"){
                                contenido+=`<p>No se ha proporcionado información de contacto para esta mascota.</p>
                                            <p>Si le interesa comuniquese al siguiente número: 9832128157.</p><br>`;
                            }else{
                                contenido+=`<p>Nombre de usuario: ${usuario.NombreUsuario}</p>`;
                                contenido+=`<p>Email: ${usuario.Email}</p>`;
                                contenido+=`<p>Telefono: ${usuario.Telefono}</p><br>`;
                            }
                            contenido+=`<b>Descripcion:</b><p class="descrip">${mascota[0].Descripcion}</p></div>`;
                            contenido+=`<div class="imgDetalles"><img src="${API_URL}${mascota[0].Imagen}"></div></div>`;
                            contenidoMascota.innerHTML=contenido;
                        }
                    }
                    xhrUsuario.addEventListener("load", onRequestHandlerUser);
                    xhrUsuario.open("GET", `${API_URL}/usuarios/${mascota[0].NombreUsuario}`);
                    xhrUsuario.send();
                });
            }
        }
    }

    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}/mascotas`, false);
    xhr.send();
    //Filtrado por checkboxes
    let cerrar = document.getElementById("btnCerrar");
    cerrar.addEventListener("click", function (){
        modal.classList.toggle("modal-close");
        setTimeout(function (){
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        }, 900);
        contenidoMascota.innerHTML=``;
    });
    window.addEventListener("click", function (e){
        if(e.target == modalC){
            modal.classList.toggle("modal-close");
            setTimeout(function (){
                modalC.style.opacity="0";
                modalC.style.visibility="hidden";
            }, 600);
        }
    });
});

addAnimals = function(cont){
    petsList.forEach(animal => {
        const divAnimal = document.createElement("div");
        const divContent = document.createElement("div");
        const animalImg = document.createElement("img");
        const footerContent = document.createElement("div");
        const animalDescription = document.createElement("div");
        const divOpciones = document.createElement("div");
        const animalSpecie = document.createElement("p");
        const animalName = document.createElement("p");
        const editar = document.createElement("img");
        const vinculoEditar = document.createElement("a");
        const borrar = document.createElement("img");
        const vinculoBorrar = document.createElement("button");
        const imgDescargar = document.createElement("img");
        const vinculoDescargar = document.createElement('a');
        let etiquetas = `${animal["Especie"]} ${animal["Tamano"]} `;
        etiquetas = etiquetas.toLowerCase();
        divAnimal.id=`animal${animal["id"]}`;
        divAnimal.className = "item";
        divContent.className = "item-contenido";
        animalDescription.className = "descripcion-mascota";
        footerContent.className = "footerContent";
        divOpciones.className = "btns-opciones";
        animalImg.className = "img-mascota";
        animalImg.id = `detalles.${animal["id"]}`
        divAnimal.setAttribute("data-nombres",`${animal["Nombre"].toLowerCase()}`);
        divAnimal.setAttribute("data-etiquetas",etiquetas);
        animalImg.src = `${API_URL}${animal["Imagen"]}`;
        animalSpecie.innerHTML = `Especie: ${animal["Especie"]}`;
        animalName.innerHTML = `Nombre: ${animal["Nombre"]}`;
        editar.src = "/proyecto-web/public/img/editar.png";
        vinculoEditar.className="vinculosOpciones";
        vinculoEditar.id=`editar.${animal["id"]}`;
        vinculoEditar.setAttribute("href", `/proyecto-web/public/registro/${animal["id"]}`)
        borrar.src = "/proyecto-web/public/img/borrar.png";
        vinculoBorrar.className="btnBorrar";
        vinculoBorrar.id=animal["id"];
        imgDescargar.src = "/proyecto-web/public/img/descargar.png";
        vinculoDescargar.className="vinculosOpciones";
        vinculoDescargar.href = `${API_URL}${animal["Imagen"]}`;
        vinculoDescargar.download = `mascota-${animal["Nombre"]}`;
        divContent.appendChild(animalImg);
        animalDescription.appendChild(animalSpecie);
        animalDescription.appendChild(animalName);
        footerContent.appendChild(animalDescription);
        vinculoEditar.appendChild(editar);
        divOpciones.appendChild(vinculoEditar);
        vinculoBorrar.appendChild(borrar);
        divOpciones.appendChild(vinculoBorrar);
        vinculoDescargar.appendChild(imgDescargar);
        divOpciones.appendChild(vinculoDescargar);
        footerContent.appendChild(divOpciones);
        divContent.appendChild(footerContent);
        divAnimal.appendChild(divContent);
        cont.appendChild(divAnimal);
    });
}

cargarParametros = function (grid){
    var full_url = document.URL;
    var url_array = full_url.split('/');
    var tipoMascota = url_array[url_array.length-1];
    if(tipoMascota !== "galeria" &&  !tipoMascota.includes("#")){
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(tipoMascota));
    }
}
