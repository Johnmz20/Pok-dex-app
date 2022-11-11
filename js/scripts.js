let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison'] },
    { name: 'Ivysaur', height: 1, type: ['Grass', 'Poison'] },
    { name: 'Venusaur', height: 2, type: ['Grass', 'Poison'] },
    { name: 'Charmander', height: 0.6, type: 'Fire'},
    { name: 'Charmeleon', height: 1.1, type: 'Fire'},
    { name: 'Charizard', height: 1.7, type: ['Fire', 'Flying'] },
    { name: 'Squirtle', height: 0.5, type: 'Water'},
    { name: 'Wartortle', height: 1, type: 'Water'},
    { name: 'Blastoise', height: 1.6, type: 'Water'}
];
//for loop says if the pokemon is bigger than 1 meter it prints out "wow that is big!"

for (let i= 0; i< pokemonList.length; i++) {
    if(pokemonList[i].height >= 1) {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + ' wow, that is big!<br>')
    }
    else{ document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')<br>')}
}
