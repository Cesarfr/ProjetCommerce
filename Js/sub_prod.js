function insertSP(event)
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

  var param = 'ID_SUB=' + document.getElementById('subcat').value;
  param += '&ID_PROD=' + document.getElementById('produit').value;

  var data = actionForm('../Php/index.php?EX=insertSP', param);

  window.location="../Php/index.php?EX=asign";
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)
function modifyS_P(event)
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
  var param = 'ID_SP=' + document.getElementById('id_sp').value;
  param += '&ID_SUB=' + document.getElementById('subcat').value;
  param += '&ID_PROD=' + document.getElementById('produit').value;

  var data = actionForm('../Php/index.php?EX=updateSP', param);

  window.location="../Php/index.php?EX=asign";
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)