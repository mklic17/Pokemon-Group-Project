$('#pokemonList').on('click', '.addButton', addButtonMethod);
var count = 0;
var templateParty = $('.templateParty')
  .detach()
  .removeClass('templateParty');

function addButtonMethod(ev){
  debugger;
  var f = ev.currentTarget;
  var poke = $(f).closest('li');
  var id = poke.attr('data-id');
  var newURL = 'https://pokeapi.co/api/v2/pokemon/' + id;

  $.get({
    url: newURL,
    success: function(pokemonDetails){
      console.log("Momma, We Made It");
      var name = pokemonDetails.forms[0].name;
      // var url = pokemonDetails.forms[0].url;
      var stats = pokemonDetails.stats;
      var pictureURL = pokemonDetails.sprites.front_default;
      nextPage(name, pictureURL, stats);
      addToMyParty(name);

      }
  })
}

function addToMyParty(name){
  // if (count < 6) {
    var li = templateParty.clone()
    li.find('#actualPokemonParty').text(name);
    $('#firstList').append('<li>' + '<img src="images/pkb.gif" alt="pokeball"> ' + name + '   <a href="#" class="remove Button">remove</a> </li>');
      // count += count + 1;
  // }
  // else {
  //   // Some kind of feedback
  // }
}


// I have not tested this out, you will need to decide what you are appending from the stats
function nextPage(name, pictureURL, statsObj){
  debugger;
  var pokemonNameStatForm = $('h1.pokemonStatName');
  pokemonNameStatForm.text = name;

  var imageURL = ('img.pokemonStatName');
  // imageURL = imageURL.attr('src', pictureURL);

  // for(var i = 0; i < statsObj.length ; i++) {
      // var checkName = statsObj[i].stat.name;
      // var checkStats = statsObj[2].base_stat;
      //
  //   $('#statsList"').append('<li>' +  + '</li>') // can't do because
  // }
}
