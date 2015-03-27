function insertCPr(event)
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

  var param = 'ID_CAT=' + document.getElementById('categorie').value;
  param += '&ID_PROD=' + document.getElementById('produit').value;

  var data = actionForm('../Php/index.php?EX=insertCP', param);

  window.location="../Php/index.php?EX=asignCP";
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)

function modifyC_P(event)
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
  var param = 'ID_CP=' + document.getElementById('id_cp').value;
  param += '&ID_CAT=' + document.getElementById('categorie').value;
  param += '&ID_PROD=' + document.getElementById('produit').value;

  var data = actionForm('../Php/index.php?EX=updateCP', param);

  window.location="../Php/index.php?EX=asignCP";
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)modifyCPr