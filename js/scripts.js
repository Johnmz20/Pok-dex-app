let pokemonRespository = (function () {
    let pokemonList = [
        { ID: "1", name: "Bulbasaur", height: 0.7, type: ["Grass", "Poison"] },
        { ID: "2", name: "Ivysaur", height: 1, type: ["Grass", "Poison"] },
        { ID: "3", name: "Venusaur", height: 2, type: ["Grass", "Poison"] },
        { ID: "4", name: "Charmander", height: 0.6, type: "Fire" },
        { ID: "5", name: "Charmeleon", height: 1.1, type: "Fire" },
        { ID: "6", name: "Charizard", height: 1.7, type: ["Fire", "Flying"] },
        { ID: "7", name: "Squirtle", height: 0.5, type: "Water" },
        { ID: "8", name: "Wartortle", height: 1, type: "Water" },
        { ID: "9", name: "Blastoise", height: 1.6, type: "Water" },
    ];
    let addPokemonEventListener = function (element, pokemon) {
        element.addEventListener("click", () => showDetails(pokemon));
    };
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addPokemonEventListener(button, pokemon);
    }
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();
console.log(pokemonRespository.getAll());

pokemonRespository.add({ ID: "10", name: "Caterpie", height: 1, type: "grass" });

pokemonRespository.getAll().forEach(function (pokemon) {
    pokemonRespository.addListItem(pokemon);
});
