$('#pokelist').on('click', '.removeButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
  debugger;
  console.log("Don't Beat Me Pappa");
  var things = ev.currentTarget;
  var li = $(things).closest('li');
  var id = li.find('#actualPokemonParty').attr('data-id');
  li.remove();
  count = count - 1;

}

// Currently not working, but I never tested it out yet
