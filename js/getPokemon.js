var url = 'https://pokeapi.co/api/v2/pokemon/?limit=812&offset=0';

var template = $('.template')
  .detach()
  .removeClass('template')

function getEachPokemon(pokemonList){
    $.each(pokemonList.results, function(i, pokemon) {
      addPokemon(pokemon, '#pokemonList');
    })
}

function addPokemon(pokemon, list) {
    var li = template.clone();
    li.find('#actualPokemon')
      .text(pokemon.name)
      .attr('href', pokemon.url)

    li.attr('data-id', pokemon.id);
    $(list).append(li);
  }


$.get({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=812&offset=0',
    success: getEachPokemon
});
