dog = {
    "img": "https://images.pexels.com/photos/8863636/pexels-photo-8863636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "especie": "Perro",
    "nombre": "Doki",
    "tamano": "grande"
};
cat = {
    "img": "https://images.pexels.com/photos/4897323/pexels-photo-4897323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "especie": "Gato",
    "nombre": "Misho",
    "tamano": "chico"
};
turtle = {
    "img": "https://images.pexels.com/photos/7053881/pexels-photo-7053881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "especie": "Perro",
    "nombre": "Rafael",
    "tamano": "chico"
};

window.onload = function(){
    const principalGrid = document.getElementById("catalogo");
    addAnimals(principalGrid);
}

addAnimals = function(cont){
    const animalesLista = [];
    animalesLista.push(dog);
    animalesLista.push(cat);
    animalesLista.push(turtle);
    console.log(`${animalesLista[0]["nombre"]}`);

    animalesLista.forEach(animal => {
        const divAnimal = document.createElement("div");
        const animalImg = document.createElement("img");
        const animalSpecie = document.createElement("p");
        const animalName = document.createElement("p");
        animalImg.src = `${animal["img"]}`;
        animalSpecie.innerHTML = `Especie: ${animal["especie"]}`;
        animalName.innerHTML = `Nombre: ${animal["nombre"]}`;
        divAnimal.appendChild(animalImg);
        divAnimal.appendChild(animalSpecie);
        divAnimal.appendChild(animalName);
        divAnimal.className = "card";
        cont.appendChild(divAnimal);
    });
}