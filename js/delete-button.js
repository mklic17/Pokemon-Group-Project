$('#pokelist').on('click', '.deleteButton', removeButtonMethod);

function removeButtonMethod(ev){
  ev.preventDefault();
  console.log("Momma, We made it further");
  var things = ev.currentTarget;
  var pokemon = $(things).closest('li');
  pokemon.remove();
  count = count - 1;
}

// Currently not working, but I never tested it out yet
