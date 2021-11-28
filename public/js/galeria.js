const API_URL = "http://localhost/crudapi/public";
let petsList = []
window.addEventListener('load',() =>{
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
        }
    }

    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}/mascotas`);
    xhr.send();
    //////////////////cargarMascotas();
    const principalGrid = document.getElementById("grid");
    //Filtrado por checkboxes
    const radioEls = document.querySelectorAll('input[type="radio"]');
    const btnBuscar = document.getElementById("query-buscar");
    const btnBorrar = document.getElementById("borrar");
    btnBuscar.addEventListener('click', (evento)=>{
        let query = "";
        evento.preventDefault();
        radioEls.forEach((elemento)=>{
            if(elemento.checked){
                query += `${elemento.value} `;
            }
        });
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(query.toLowerCase()));
        console.log(query);
    });
    btnBorrar.addEventListener('click', (evento)=>{
        evento.preventDefault();
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(''));
        radioEls.forEach((elemento)=>{
            if(elemento.checked){
                elemento.checked = false;
            }
        });
    });
    //Filtrado por barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento)=>{
        const busqueda = evento.target.value;
        grid.filter((item)=> item.getElement().dataset.nombres.includes(busqueda.toLowerCase()));
    })
    grid.refreshItems();
})

addAnimals = function(cont){
    petsList.forEach(animal => {
        const divAnimal = document.createElement("div");
        const divContent = document.createElement("div");
        const animalImg = document.createElement("img");
        const animalDescription = document.createElement("div");
        const animalSpecie = document.createElement("p");
        const animalName = document.createElement("p");
        let etiquetas = `${animal["Especie"]} ${animal["Tamanio"]} `;
        etiquetas = etiquetas.toLowerCase();
        divAnimal.className = "item";
        divContent.className = "item-contenido";
        animalDescription.className = "descripcion-mascota";
        divAnimal.setAttribute("data-nombres",`${animal["Nombre"].toLowerCase()}`);
        divAnimal.setAttribute("data-etiquetas",etiquetas);
        animalImg.src = `${API_URL}${animal["Imagen"]}`;
        animalSpecie.innerHTML = `Especie: ${animal["Especie"]}`;
        animalName.innerHTML = `Nombre: ${animal["Nombre"]}`;
        divContent.appendChild(animalImg);
        animalDescription.appendChild(animalSpecie);
        animalDescription.appendChild(animalName);
        divContent.appendChild(animalDescription);
        divAnimal.appendChild(divContent);
        cont.appendChild(divAnimal);
    });
}

cargarParametros = function (grid){
    let params = (new URL(document.location)).searchParams;
    if(params.has("tipoMascota")){
        const tipoMascota = params.get("tipoMascota");
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(tipoMascota));
    }
}
