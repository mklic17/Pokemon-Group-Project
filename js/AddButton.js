$('#pokemonList').on('click', '.addButton', addButtonMethod);
var partyCount = 0;

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
      var pokemonobject = pokemonDetails.forms[0]
      // var url = pokemonDetails.forms[0].url;
      var stats = pokemonDetails.stats;
      debugger;
      var pictureURL = pokemonDetails.sprites.front_default;
      nextPage(name, pictureURL, stats);
      addToMyParty(pokemonobject, pictureURL);

      }
  })
}

function addToMyParty(pokemonObject, pictureURL){
  debugger;
 if (partyCount < 6) {
    var li = templateParty.clone()
    li.find('#actualPokemonParty').text(pokemonObject.name);
    $('#firstList').append('<li>' + '<img src="images/pkb.gif" alt="pokeball">' + '<a class="pickedPokemon" href="#">  ' + pokemonObject.name + '</a>' + '<a href="#" class="removeButton">remove</a> </li>');
    // $('#firstList').append('<li>' + '<img src="images/pkb.gif" alt="pokeball">' + '<a class="pickedPokemon" href="yougonnalearntoday.html">  ' + pokemonObject.name + '</a>' + '<a href="#" class="removeButton">remove</a> </li>');
    // var x = JSON.stringify(pokeomnObject);
    // localStorage.setItem(partyCount, x);
    partyCount++;
    var placement = $('.picturePokemon').removeClass('hide');

    placement.attr('src', pictureURL);
    // var x = JSON.stringify(pokemon.results[i]);
    // localStorage.setItem(count, x);
 }
 else {
    alert('Your party is full');
 }
}


// I have not tested this out, you will need to decide what you are appending from the stats
function nextPage(name, pictureURL, statsObj){
  var pokemonNameStatForm = $('h1.pokemonStatName').text(name);
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

// $('#actualPokemonParty').on('click', '.pickedPokemon', putI);
//
// function launchNewPage (ev) {
//   debugger;
//   var ya = ev.currentTarget;
//   var currLi = $(ya).closest('li');

  // var pokemonURL =
// }
