$('#pokemonList').on('click', '.deleteButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
  var things = ev.currentTarget;
  var pokemon = $(things).closest('li');
  pokemon.remove();
  count = count - 1;
}
