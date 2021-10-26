dog = {
    "img": "",
    "especie": "Perro",
    "nombre": "Doki",
    "disponible": true 
};
cat = {
    "img": "",
    "especie": "Gato",
    "nombre": "Misho",
    "disponible": true 
};
turtle = {
    "img": "",
    "especie": "Tortuga",
    "nombre": "Rafael",
    "disponible": false 
};

window.onload = function(){
    principalGrid = document.getElementsByTagName("main")[0];
    addAnimals(principalGrid);
}

addAnimals = function(cont){
    animalesLista = [];
    animalesLista.push(dog);
    animalesLista.push(cat);
    animalesLista.push(turtle);
    console.log(`${animalesLista[0]["nombre"]}`);

    animalesLista.forEach(animal => {
        let divAnimal = document.createElement("div");
        let animalSpecie = document.createElement("p");
        let animalName = document.createElement("p");
        animalSpecie.innerHTML = `Especie: ${animal["especie"]}`;
        animalName.innerHTML = `Nombre: ${animal["nombre"]}`;
        divAnimal.appendChild(animalSpecie);
        divAnimal.appendChild(animalName);
        divAnimal.className = "card animal";
        cont.appendChild(divAnimal);
    });
}