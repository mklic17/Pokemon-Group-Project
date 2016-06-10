$('#pokemonList').on('click', '.addButton', addButtonMethod);

var templateParty = $('.templateParty')
  .detach()
  .removeClass('templateParty');



function addButtonMethod(ev){
  var f = ev.currentTarget;
  var poke = $(f).closest('li');
  var id = poke.attr('data-id');
  var newURL = 'https://pokeapi.co/api/v2/pokemon/' + id;

  $.get({
    url: newURL,
    success: function(pokemonDetails){
      debugger;
        var name = pokemonDetails.forms[0].name;
        // var url = pokemonDetails.forms[0].url;
        var stats = pokemonDetails.stats;
        addToMyParty(name);
      }
    })
  }

function addToMyParty(name){
  var li = templateParty.clone()
  li.find('#actualPokemonParty').text(name);
  $('#firstList').append(name);
}
