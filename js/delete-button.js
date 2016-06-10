$('.pokelist').on('click', '.removeButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
  console.log("Momma, We made it further");
  var things = ev.currentTarget;
  var li = $(things).closest('li');
  var id = li.find('#actualPokemonParty').attr('data-id');
  li.remove();
  partyCount = partyCount - 1;
  // JSON.parse(localStorage.removeItem(id));

}

// Currently not working, but I never tested it out yet
