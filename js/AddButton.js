$('addButton').on('click', addButtonMethod);

function addButtonMethod(ev){
  debugger;
  var buttonFired = ev.currentTarget;
  var pokemon = buttonFired.pokemon;
  console.log(pokemon);

}
