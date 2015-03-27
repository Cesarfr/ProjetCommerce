/**
 * @author [Cesar HERNANDEZ ANTONIO] <[cesar19_fr@outlook.com]>
 */
function insertSubCat(event)
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

  var param = 'NOM_SUB=' + document.getElementById('nom_sub').value;
  param += '&ID_CAT='+document.getElementById('categorie').value;

  var data = actionForm('../Php/index.php?EX=insSubCate', param);
  //alert(data.value);

  //document.getElementById('nom_cate').value = '';
  window.location="../Php/index.php?EX=scat";
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // insertData(event)

function modifySubCat(event)
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

  var param = 'NOM_SUB=' + document.getElementById('nom_sub').value;
  param += '&ID_SUB='+document.getElementById('id_subcat').value;
  param += '&ID_CAT='+document.getElementById('categorie').value;

  var data = actionForm('../Php/index.php?EX=editSub', param);
  
  window.location="../Php/index.php?EX=scat";
  
  // Stoppe l'événement
  stopEvent(event);
  return false;

} // modifySubCat()