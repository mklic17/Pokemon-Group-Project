$('#pokemonList').on('click', '.addButton', addButtonMethod);



function addButtonMethod(ev){
  var f = ev.currentTarget;
  debugger;
  var poke = $(f).closest('li');
  var id = poke.attr('data-id');

  var newURL = 'https://pokeapi.co/api/v2/pokemon/' + id;

  $.get({
    url: newURL,
    success: function(pokemonDetails){
      debugger;
        var name = pokemonDetails.forms[0].name;
        addToMyParty(name);
        // $.each(pokemonDetails.stats, function (i, stat){
        //
        // })
      }

    })
  }

function addToMyParty(name){
  $('#firstList').append(name);
}
