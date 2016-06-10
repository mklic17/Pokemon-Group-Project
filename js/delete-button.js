$('.pokelist').on('click', '.removeButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
<<<<<<< HEAD

  console.log("Momma, We made it further");

  //debugger;
=======
>>>>>>> c584e80a6b1656399b15d78698f0ff57e696c371
  console.log("Don't Beat Me Pappa");
  var things = ev.currentTarget;
  var li = $(things).closest('li');
  var id = li.find('#actualPokemonParty').attr('data-id');
  li.remove();
  partyCount = partyCount - 1;
}
