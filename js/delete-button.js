$('.pokelist').on('click', '.removeButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
  console.log("Momma, We made it further");
  //debugger;
  console.log("Don't Beat Me Pappa");
  var things = ev.currentTarget;
  var li = $(things).closest('li');
  var id = li.find('#actualPokemonParty').attr('data-id');
  li.remove();
  partyCount = partyCount - 1;
}
