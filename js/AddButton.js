$('#pokemonList').on('click', '.addButton', addButtonMethod);

function addButtonMethod(ev){
  debugger
  var f = ev.currentTarget;

  var poke = $(f).closest('#actualPokemon');
  var id = poke.attr('data-id');
  // var x = poke.clone().removeClass('template').attr("myParty");
  // var id = poke.
  //pokemonList.results[id].name;

  console.log('Momma, we made it');


  //var if = li.attr('')

  addPokemon(0, id, '#firstList'); // pokemon object

}


// function addMutant(mutant) {
//   var li = $('.template')
//     .clone()
//     .removeClass('template');
//
//   li.find('.mutant-name').text(mutant.mutant_name);
//   li.attr('data-id', mutant.id);
//   $('#mutantList').append(li);
// }
