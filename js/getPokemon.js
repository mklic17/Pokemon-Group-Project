var url = 'https://pokeapi.co/api/v2/pokemon/?limit=812&offset=0';

var template = $('.template')
  .detach()
  .removeClass('template')

function getEachPokemon(pokemonList){
    var count = 1;
    $.each(pokemonList.results, function(i, pokemon) { //
      addPokemon(count, pokemon, '#pokemonList');
      count++;
    })
}

function addPokemon(count, pokemon, list) {
  var li = template.clone().removeClass('template');


  if (count > 0){
    li.attr('data-id', count);
      li.find('#actualPokemon').text(pokemon.name).attr('href', pokemon.url);
  }

    $(list).append(li);
  }

$.get({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=812&offset=0',
    success: getEachPokemon
});
