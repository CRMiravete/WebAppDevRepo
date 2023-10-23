const listaPokemon = document.querySelector("#listaPokemon");
const searchButton = document.getElementById('search');
let URL = "https://pokeapi.co/api/v2/pokemon/";
let pokemonName = ' ';

function mostrarPokemones(){
    for (let i = 1; i <= 200; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => mostrarPokemon(data))
    }
}
mostrarPokemones()



const searchPokemon = async (name) =>{
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data
}

searchPokemon(pokemonName).then(data => {
    console.log(data);
    listaPokemon.innerHTML = `Nombre: ${data.name} <br> Habilidades:`
    const img = document.createRange().createContextualFragment(`
    <div class = "container">
        <img src="${data.sprites.other["official-artwork"].front_default}">
    </div>
    `
    )
    
    data.abilities.forEach((element) =>{
      const article = document.createRange().createContextualFragment(
        /*html*/
        `
        <p>${element.ability.name}</p>
        `
      )
      document.getElementById("info").append(article)
    })
    document.getElementById("info").append(img)

}).catch(() => document.getElementById("info").innerHTML = "Couldn't find Pokemon")


searchButton.addEventListener('click', () => {

    pokemonName = document.getElementById("buscador").value
    searchPokemon(pokemonName)
});

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    let habilidades = poke.abilities.map((ability) => `<p class="${ability.ability.name} habilidad">${ability.ability.name}</p>`);
    habilidades = habilidades.join('');

    let peso = poke.weight.toString();
    let experiencia = poke.base_experience.toString();
    let altura = poke.height.toString();

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        
    <div class="pokemon-id">
        <p>#${pokeId}</p>
        </div>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            <a href=></a>
        </div>
        
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>

            <div class="modal_body">
                <p><b>Abilities:</b>${habilidades}</p>
            </div>
            
            
            <div class="pokemon-tipos">
                ${tipos}
            </div>

            <div class="pokemon_peso">
                <p>Weight: ${peso}</p>
                <p>Height: ${altura}</p>
            </div>
            <p><i>Base Experience:</i> ${experiencia}</p>
        </div>
    `;
    listaPokemon.append(div);

    app.use((err, req, res, next)=>{ //What´ll execute the error screen if the website crashes
        console.error(err.message);
        res.status(500).send("An error has occured. Sorry for the incovencience")
    });
}


