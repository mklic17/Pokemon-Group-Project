$('#pokemonList').on('click', '.addButton', addButtonMethod);
var count = 0;
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
      var name = pokemonDetails.forms[0].name;
      // var url = pokemonDetails.forms[0].url;
      var stats = pokemonDetails.stats;
      var pictureURL = pokemonDetails.sprites.front_default;
      addToMyParty(name);
      }
  })
}

function addToMyParty(name){
  if (count < 6) {
      var li = templateParty.clone()
      li.find('#actualPokemonParty').text(name);
      $('#firstList').append('<li>' + '<img src="images/pkb.gif" alt="pokeball"> ' + name + '</li>');
      count += count + 1;
  }
  else {
    // Some kind of feedback
  }
}
