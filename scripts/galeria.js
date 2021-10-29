const dog = {
    "imagen": "https://images.pexels.com/photos/8863636/pexels-photo-8863636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "especie": "Perro",
    "nombre": "Doki",
    "tamanio": "grande"
};
const cat = {
    "imagen": "https://images.pexels.com/photos/4897323/pexels-photo-4897323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "especie": "Gato",
    "nombre": "Misho",
    "tamanio": "chico"
};
const turtle = {
    "imagen": "https://images.pexels.com/photos/7053881/pexels-photo-7053881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "especie": "Perro",
    "nombre": "Rafael",
    "tamanio": "chico"
};

let petsList = []
window.addEventListener('load',() =>{
    cargarMascotas();
    const principalGrid = document.getElementById("grid");
    addAnimals(principalGrid);
    const grid = new Muuri('.grid', {
        layout: {
            rounding: false
        }
    });
    cargarParametros(grid);
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add('imagenes-cargadas');
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
    petsList.push(dog);
    petsList.push(cat);
    petsList.push(turtle);

    petsList.forEach(animal => {
        const divAnimal = document.createElement("div");
        const divContent = document.createElement("div");
        const animalImg = document.createElement("img");
        const animalDescription = document.createElement("div");
        const animalSpecie = document.createElement("p");
        const animalName = document.createElement("p");
        let etiquetas = `${animal["especie"]} ${animal["tamanio"]} `;
        etiquetas = etiquetas.toLowerCase();
        divAnimal.className = "item";
        divContent.className = "item-contenido";
        animalDescription.className = "descripcion-mascota";
        divAnimal.setAttribute("data-nombres",`${animal["nombre"].toLowerCase()}`);
        divAnimal.setAttribute("data-etiquetas",etiquetas);
        animalImg.src = `${animal["imagen"]}`;
        animalSpecie.innerHTML = `Especie: ${animal["especie"]}`;
        animalName.innerHTML = `Nombre: ${animal["nombre"]}`;
        divContent.appendChild(animalImg);
        animalDescription.appendChild(animalSpecie);
        animalDescription.appendChild(animalName);
        divContent.appendChild(animalDescription);
        divAnimal.appendChild(divContent);
        cont.appendChild(divAnimal);
    });
}

cargarMascotas = function(){
    let mascotasString = "";
    try {
         if(localStorage.getItem('listaMascotas')){
                mascotasString = localStorage.getItem('listaMascotas');
        }
    } catch (error) {
         console.log("Error al cargar el local storage \n" + error);
    }
    if(mascotasString){
        petsList = JSON.parse(mascotasString);
    }
}

cargarParametros = function (grid){
    let params = (new URL(document.location)).searchParams;
    if(params.has("tipoMascota")){
        const tipoMascota = params.get("tipoMascota");
        grid.filter((item)=> item.getElement().dataset.etiquetas.includes(tipoMascota));
    }
}