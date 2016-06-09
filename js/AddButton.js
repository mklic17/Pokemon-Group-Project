$('#allWrapped').on('click', '#addButton', addButtonMethod);

function addButtonMethod(ev){
  debugger;
  ev.preventDefault();
  var t = ev.currentTarget;
  var buttonFired = ev.currentTarget;
  var li = $(t).closest('li');
  var id = li.attr('data-id');

  //var if = li.attr('')

  addPokemon(0, id, '#firstList'); // pokemon object

}
