var url = 'https://pokeapi.co/api/v2/pokemon/?limit=812&offset=0';

function getEachPokemon(results){
    debugger
    $.each(results.results, function(i, pokemon) { //results is an array of pokemon on the API
      addPokemon(pokemon);
    }
}

function addPokemon(pokemon) {
    var li = template.clone();
    li.find('.pokemon-name a')
      .text(pokemon.name)
      .attr('href', pokemon.url)

    li.attr('data-id', pokemon.id);
    $('#pokemonList').append(li);
  }

// function addEachPokemonToList(pokemon){
//   debugger
//   $('#listPokemon').append('<li>' + pokemon.name+ '</li>');
// }


$.get({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=812&offset=0',
    success: getEachPokemon
});
