const pokemonData = [
    {
        name: "Bulbasaur",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        height: "0.7m",
        weight: "6.9kg",
        type: "Grass/Poison"
    },
    {
        name: "Charmander",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        height: "0.6m",
        weight: "8.5kg",
        type: "Fire"
    },
    {
        name: "Squirtle",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        height: "0.5m",
        weight: "9.0kg",
        type: "Water"
    }
];

let currentIndex = 0;
const pokemonNameElement = document.getElementById("pokemon-name");
const pokemonImgElement = document.getElementById("pokemon-img");
const pokemonInfoElement = document.getElementById("pokemon-info");

function updatePokemonInfo(index) {
    const pokemon = pokemonData[index];
    pokemonNameElement.textContent = pokemon.name;
    pokemonImgElement.src = pokemon.img;
    pokemonInfoElement.innerHTML = `
        <p><strong>Height:</strong> ${pokemon.height}</p>
        <p><strong>Weight:</strong> ${pokemon.weight}</p>
        <p><strong>Type:</strong> ${pokemon.type}</p>
    `;
}

function prevPokemon() {
    currentIndex = (currentIndex - 1 + pokemonData.length) % pokemonData.length;
    updatePokemonInfo(currentIndex);
}

function nextPokemon() {
    currentIndex = (currentIndex + 1) % pokemonData.length;
    updatePokemonInfo(currentIndex);
}


updatePokemonInfo(currentIndex);
