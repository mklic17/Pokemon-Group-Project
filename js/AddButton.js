$('#allWrapped').on('click', '#addButton', addButtonMethod);

function addButtonMethod(ev){
  debugger;
  ev.preventDefault;
  var buttonFired = ev.currentTarget;
  var pokemon = buttonFired.results;
  console.log(pokemon);


  //addPokemon(pokemon, '#firstList'); // pokemon object

}
