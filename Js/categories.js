
function insertCategorie(event)
{
  // Récupère l'élément <form>
  var frm = event.target || event.srcElement;
  
  // Vérifie le formulaire
  if (!verifform(frm))
  {
    // Stoppe l'événement
    stopEvent(event);
    
    return false;
  }

  var param = 'NOM_CATE=' + document.getElementById('nom_cate').value;

  var data = actionForm('../Php/index.php?EX=insertCate', param);
  //alert(data.value);

  document.getElementById('nom_cate').value = '';
  window.location="../Php/index.php?EX=cat";
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)

function modifierCategorie(event)
{
 // Récupère l'élément <form>
  var frm = event.target || event.srcElement;
  
  // Vérifie le formulaire
  if (!verifform(frm))
  {
    // Stoppe l'événement
    stopEvent(event);
    
    return false;
  }

  var param = 'ID_CATEGORIE=' + document.getElementById('id_categorie').value;
  param += '&NOM_CATE=' + document.getElementById('nom_cate').value;

  var data = actionForm('../Php/index.php?EX=editCat', param);

  document.getElementById('nom_cate').value = '';
  document.getElementById('id_categorie').value = '';
  
  window.location="../Php/index.php?EX=cat";
  
  // Stoppe l'événement
  stopEvent(event);
  return false;

} 