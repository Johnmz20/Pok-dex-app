let pokemonRespository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: 0.7, type: ["Grass", "Poison"] },
        { name: "Ivysaur", height: 1, type: ["Grass", "Poison"] },
        { name: "Venusaur", height: 2, type: ["Grass", "Poison"] },
        { name: "Charmander", height: 0.6, type: "Fire" },
        { name: "Charmeleon", height: 1.1, type: "Fire" },
        { name: "Charizard", height: 1.7, type: ["Fire", "Flying"] },
        { name: "Squirtle", height: 0.5, type: "Water" },
        { name: "Wartortle", height: 1, type: "Water" },
        { name: "Blastoise", height: 1.6, type: "Water" },
    ];

    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        }
    };
})();
console.log(pokemonRespository.getAll());

pokemonRespository.add({ name: "Caterpie", height: 1, type: "grass",});

pokemonRespository.getAll().forEach(function (pokemon) {
    if (pokemon.height >= 1) {
        document.write(pokemon.name + " (height: " + pokemon.height + ")" + " wow, that is big!<br>");
    } else {
        document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
    }
});