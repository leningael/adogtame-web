const API_URL = "http://localhost/crudapi/public";
let petsList = [];
document.addEventListener("DOMContentLoaded", function (){
    let modal = document.getElementById("modal");
    let modalC = document.getElementById("modal-container");
    const xhr = new XMLHttpRequest();
    function onRequestHandler(){
        if(this.readyState === 4 && this.status === 200){
            petsList = JSON.parse(this.response);
            addAnimals(document.getElementById("grid"));
            const grid = new Muuri('.grid', {
                layout: {
                    rounding: false
                }
            });
            cargarParametros(grid);
            document.getElementById("grid").classList.add('imagenes-cargadas');
            activarBusqueda(grid);
            activarBorradoFiltros(grid);
            busquedaPorNombre(grid);
            btnsBorrarMascota();
            activarInfoMascota(modal, modalC);
        }
    }
    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}/mascotas`, false);
    xhr.send();
    btnCerrarModal(modal, modalC);
    cerrarModalFuera(modal, modalC);
});

cargarParametros = function (grid){
    var full_url = document.URL;
    var url_array = full_url.split('/');
    var tipoMascota = url_array[url_array.length-1];
    if(tipoMascota !== "galeria" &&  !tipoMascota.includes("#")){
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(tipoMascota));
    }
    grid.refreshItems().layout();
}

activarBusqueda = function (grid){
    document.getElementById("query-buscar").addEventListener('click', (evento)=>{
        let query = "";
        evento.preventDefault();
        document.querySelectorAll('input[type="radio"]').forEach((elemento)=>{
            if(elemento.checked){
                query += `${elemento.value} `;
            }
        });
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(query.toLowerCase()));
        grid.refreshItems().layout();
    });
}

activarBorradoFiltros = function (grid){
    document.getElementById("borrar").addEventListener('click', (evento)=>{
        evento.preventDefault();
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(''));
        document.querySelectorAll('input[type="radio"]').forEach((elemento)=>{
            if(elemento.checked){
                elemento.checked = false;
            }
        });
        grid.refreshItems().layout();
    });
}

busquedaPorNombre = function (grid){
    document.querySelector('#barra-busqueda').addEventListener('input', (evento)=>{
        const busqueda = evento.target.value;
        grid.filter((item)=> item.getElement().dataset.nombres.includes(busqueda.toLowerCase()));
        grid.refreshItems().layout();
    });
}

btnsBorrarMascota = function (){
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
}

activarInfoMascota = function (modal, modalC){
    const detallesMascotas = document.querySelectorAll(".img-mascota");
    for(let i = 0; i < detallesMascotas.length; i++){
        detallesMascotas[i].addEventListener("click", function (e){
            e.preventDefault();
            modalC.style.opacity="1";
            modalC.style.visibility="visible";
            modal.classList.toggle("modal-close");
            var idDetalles = this.id.split(".");
            var mascota = petsList.filter(function (mascota){
                return mascota.id==idDetalles[1];
            });
            const xhrUsuario = new XMLHttpRequest();
            function onRequestHandlerUser(){
                if(this.readyState === 4 && this.status === 200){
                    let usuario = JSON.parse(this.response);
                    rellenarInfo(mascota, usuario);
                }
            }
            xhrUsuario.addEventListener("load", onRequestHandlerUser);
            xhrUsuario.open("GET", `${API_URL}/usuarios/${mascota[0].NombreUsuario}`);
            xhrUsuario.send();
        });
    }
}

rellenarInfo = function (mascota, usuario){
    let contenido = "";
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
    document.getElementById("contenidoMascota").innerHTML=contenido;
}

btnCerrarModal = function (modal, modalC){
    document.getElementById("btnCerrar").addEventListener("click", function (){
        modal.classList.toggle("modal-close");
        setTimeout(function (){
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        }, 900);
        document.getElementById("contenidoMascota").innerHTML=``;
    });
}

cerrarModalFuera = function (modal, modalC){
    window.addEventListener("click", function (e){
        if(e.target === modalC){
            modal.classList.toggle("modal-close");
            setTimeout(function (){
                modalC.style.opacity="0";
                modalC.style.visibility="hidden";
            }, 600);
        }
    });
}

//AGREGA LAS MASCOTAS AL GRID

addAnimals = function(cont){
    petsList.forEach(animal => {
        crearGridItem(cont, animal);
    });
}

crearGridItem = function (cont, animal){
    const divAnimal = document.createElement("div");
    divAnimal.id=`animal${animal["id"]}`;
    divAnimal.className = "item";
    let etiquetas = `${animal["Especie"]} ${animal["Tamano"]} `;
    etiquetas = etiquetas.toLowerCase();
    divAnimal.setAttribute("data-nombres",`${animal["Nombre"].toLowerCase()}`);
    divAnimal.setAttribute("data-etiquetas",etiquetas);
    asignarContenido(divAnimal, animal);
    cont.appendChild(divAnimal);
}

asignarContenido = function (divAnimal, animal){
    const divContent = document.createElement("div");
    divContent.className = "item-contenido";
    colocarImagen(divContent, animal);
    colocarFooterContent(divContent, animal);
    divAnimal.appendChild(divContent);
}

colocarImagen = function (divContent, animal){
    const animalImg = document.createElement("img");
    animalImg.className = "img-mascota";
    animalImg.id = `detalles.${animal["id"]}`
    animalImg.src = `${API_URL}${animal["Imagen"]}`;
    divContent.appendChild(animalImg);
}

colocarFooterContent = function (divContent, animal){
    const footerContent = document.createElement("div");
    footerContent.className = "footerContent";
    colocarDescripcion(footerContent, animal);
    btnsOpciones(footerContent, animal);
    divContent.appendChild(footerContent);
}

colocarDescripcion = function (footerContent, animal){
    const animalDescription = document.createElement("div");
    animalDescription.className = "descripcion-mascota";
    const animalSpecie = document.createElement("p");
    const animalName = document.createElement("p");
    animalSpecie.innerHTML = `Especie: ${animal["Especie"]}`;
    animalName.innerHTML = `Nombre: ${animal["Nombre"]}`;
    animalDescription.appendChild(animalSpecie);
    animalDescription.appendChild(animalName);
    footerContent.appendChild(animalDescription);
}

btnsOpciones = function (footerContent, animal){
    const divOpciones = document.createElement("div");
    divOpciones.className = "btns-opciones";
    colocarBtnEditar(divOpciones, animal);
    colocarBtnBorrar(divOpciones, animal);
    colocarBtnDescargar(divOpciones, animal);
    footerContent.appendChild(divOpciones);
}

colocarBtnEditar = function (divOpciones, animal){
    const editar = document.createElement("img");
    const vinculoEditar = document.createElement("a");
    editar.src = "/proyecto-web/public/img/editar.png";
    vinculoEditar.className="vinculosOpciones";
    vinculoEditar.id=`editar.${animal["id"]}`;
    vinculoEditar.setAttribute("href", `/proyecto-web/public/registro/${animal["id"]}`);
    vinculoEditar.appendChild(editar);
    divOpciones.appendChild(vinculoEditar);
}

colocarBtnBorrar = function (divOpciones, animal){
    const borrar = document.createElement("img");
    const vinculoBorrar = document.createElement("button");
    borrar.src = "/proyecto-web/public/img/borrar.png";
    vinculoBorrar.className="btnBorrar";
    vinculoBorrar.id=animal["id"];
    vinculoBorrar.appendChild(borrar);
    divOpciones.appendChild(vinculoBorrar);
}

colocarBtnDescargar = function (divOpciones, animal){
    const imgDescargar = document.createElement("img");
    const vinculoDescargar = document.createElement('a');
    imgDescargar.src = "/proyecto-web/public/img/descargar.png";
    vinculoDescargar.className="vinculosOpciones";
    vinculoDescargar.href = `${API_URL}${animal["Imagen"]}`;
    vinculoDescargar.download = `mascota-${animal["Nombre"]}`;
    vinculoDescargar.appendChild(imgDescargar);
    divOpciones.appendChild(vinculoDescargar);
}
