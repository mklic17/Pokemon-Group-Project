$('#firstlist').on('click', '.deleteButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
  debugger;
  console.log("Momma, We made it further");
  var things = ev.currentTarget;
  var li = $(things).closest('li');
  var id = li.find('#actualPokemonParty').attr('data-id');
  li.remove();
  count = count - 1;
  JSON.parse(localStorage.removeItem(id));

}

// Currently not working, but I never tested it out yet
