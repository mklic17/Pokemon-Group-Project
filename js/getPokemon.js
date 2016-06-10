var url = 'https://pokeapi.co/api/v2/pokemon/?limit=811&offset=0';

var template = $('.template')
  .detach()
  .removeClass('template')



function getEachPokemon(pokemonList){
    var count = 1;
    $.each(pokemonList.results, function(i, pokemon) { //
      addPokemon(count, pokemon);
      count++;
    })


}

function addPokemon(count, pokemon) {
  var li = template.clone()
  li.attr('data-id', count);
  li.find('#actualPokemon').text(pokemon.name).attr('href', pokemon.url);
    // $(list).append('<li class= "' + count + '"+ >' + pokemon.name + '</li>');
    $('#pokemonList').append(li);
  }


$.get({
    url: url,
    success: getEachPokemon
});
